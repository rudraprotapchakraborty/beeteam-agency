import { NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import { getSession } from '@/lib/auth'
import { purchasesCollection, type PurchaseDoc } from '@/lib/models'
import { findShow, PAYMENT_NUMBERS, PAYMENT_LABELS, TICKET_PRICE } from '@/lib/tickets'

// GET /api/tickets — current user's own purchases (most recent first)
export async function GET() {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })

  const purchases = await purchasesCollection()
  const docs = await purchases
    .find({ userId: new ObjectId(session.id) })
    .sort({ createdAt: -1 })
    .toArray()

  return NextResponse.json({ purchases: docs.map(serializePurchase) })
}

// POST /api/tickets — submit a manual-payment ticket for verification
export async function POST(req: Request) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Please sign in first.' }, { status: 401 })

  let body: {
    showId?: string
    time?: string
    method?: string
    senderNumber?: string
    transactionId?: string
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const show = findShow(body.showId || '')
  if (!show) {
    return NextResponse.json({ error: 'Please choose a valid show.' }, { status: 400 })
  }
  const time = (body.time || '').trim()
  if (!show.times.includes(time)) {
    return NextResponse.json({ error: 'Please choose a valid show time.' }, { status: 400 })
  }
  const method = body.method === 'bkash' || body.method === 'nagad' ? body.method : null
  if (!method) {
    return NextResponse.json({ error: 'Please choose a payment method.' }, { status: 400 })
  }

  const senderNumber = (body.senderNumber || '').replace(/\D/g, '')
  if (senderNumber.length < 6) {
    return NextResponse.json(
      { error: 'Enter the number you sent the payment from.' },
      { status: 400 },
    )
  }
  const transactionId = (body.transactionId || '').trim()
  if (transactionId.length < 4) {
    return NextResponse.json(
      { error: 'Enter the transaction ID (TrxID) from your payment SMS.' },
      { status: 400 },
    )
  }

  const purchases = await purchasesCollection()

  // Guard against a duplicate submission of the same transaction id.
  const dupe = await purchases.findOne({ transactionId })
  if (dupe) {
    return NextResponse.json(
      { error: 'This transaction ID has already been submitted.' },
      { status: 409 },
    )
  }

  const doc: PurchaseDoc = {
    userId: new ObjectId(session.id),
    showDate: show.date,
    showLabel: `${show.label} · ${show.venue}`,
    showTime: time,
    method,
    payTo: PAYMENT_NUMBERS[method],
    amount: TICKET_PRICE,
    senderNumber,
    transactionId,
    status: 'pending',
    createdAt: new Date(),
    verifiedAt: null,
  }

  const result = await purchases.insertOne(doc)
  return NextResponse.json(
    {
      purchase: serializePurchase({ ...doc, _id: result.insertedId }),
      methodLabel: PAYMENT_LABELS[method],
    },
    { status: 201 },
  )
}

export function serializePurchase(doc: PurchaseDoc) {
  return {
    id: String(doc._id),
    showDate: doc.showDate,
    showLabel: doc.showLabel,
    showTime: doc.showTime,
    method: doc.method,
    payTo: doc.payTo,
    amount: doc.amount,
    senderNumber: doc.senderNumber,
    transactionId: doc.transactionId,
    status: doc.status,
    createdAt: doc.createdAt,
    verifiedAt: doc.verifiedAt,
  }
}
