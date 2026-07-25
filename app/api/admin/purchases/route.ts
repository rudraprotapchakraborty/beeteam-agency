import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { purchasesCollection } from '@/lib/models'

// GET /api/admin/purchases — all purchases with buyer info, newest first.
export async function GET() {
  const me = await getCurrentUser()
  if (!me) return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  if (!me.isAdmin) return NextResponse.json({ error: 'Admins only.' }, { status: 403 })

  const purchases = await purchasesCollection()
  const docs = await purchases
    .aggregate([
      { $sort: { createdAt: -1 } },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'buyer',
        },
      },
      { $unwind: { path: '$buyer', preserveNullAndEmptyArrays: true } },
    ])
    .toArray()

  return NextResponse.json({
    purchases: docs.map((d) => ({
      id: String(d._id),
      buyerName: d.buyer?.fullName ?? 'Unknown',
      buyerPhone: d.buyer?.phone ?? '—',
      showLabel: d.showLabel,
      showTime: d.showTime,
      method: d.method,
      payTo: d.payTo,
      amount: d.amount,
      senderNumber: d.senderNumber,
      transactionId: d.transactionId,
      status: d.status,
      createdAt: d.createdAt,
      verifiedAt: d.verifiedAt,
    })),
  })
}
