import { NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import { getCurrentUser } from '@/lib/auth'
import { purchasesCollection, type PurchaseStatus } from '@/lib/models'

// PATCH /api/admin/purchases/:id — set status to verified / rejected / pending.
export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const me = await getCurrentUser()
  if (!me) return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  if (!me.isAdmin) return NextResponse.json({ error: 'Admins only.' }, { status: 403 })

  const { id } = await ctx.params
  let objectId: ObjectId
  try {
    objectId = new ObjectId(id)
  } catch {
    return NextResponse.json({ error: 'Invalid purchase id.' }, { status: 400 })
  }

  let body: { status?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const allowed: PurchaseStatus[] = ['pending', 'verified', 'rejected']
  if (!allowed.includes(body.status as PurchaseStatus)) {
    return NextResponse.json({ error: 'Invalid status.' }, { status: 400 })
  }
  const status = body.status as PurchaseStatus

  const purchases = await purchasesCollection()
  const result = await purchases.findOneAndUpdate(
    { _id: objectId },
    {
      $set: {
        status,
        verifiedAt: status === 'verified' ? new Date() : null,
      },
    },
    { returnDocument: 'after' },
  )

  if (!result) {
    return NextResponse.json({ error: 'Purchase not found.' }, { status: 404 })
  }

  return NextResponse.json({ ok: true, status })
}
