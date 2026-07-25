import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { usersCollection, purchasesCollection } from '@/lib/models'

export async function GET() {
  const me = await getCurrentUser()
  if (!me) return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  if (!me.isAdmin) return NextResponse.json({ error: 'Admins only.' }, { status: 403 })

  const users = await usersCollection()
  const purchases = await purchasesCollection()

  const docs = await users.find({ isAdmin: { $ne: true } }).sort({ createdAt: -1 }).toArray()

  // Attach a per-user purchase + confirmed count.
  const counts = await purchases
    .aggregate<{ _id: unknown; total: number; confirmed: number }>([
      {
        $group: {
          _id: '$userId',
          total: { $sum: 1 },
          confirmed: {
            $sum: { $cond: [{ $eq: ['$status', 'verified'] }, 1, 0] },
          },
        },
      },
    ])
    .toArray()

  const countMap = new Map(counts.map((c) => [String(c._id), c]))

  return NextResponse.json({
    users: docs.map((u) => {
      const c = countMap.get(String(u._id))
      return {
        id: String(u._id),
        fullName: u.fullName,
        phone: u.phone,
        isAdmin: u.isAdmin,
        createdAt: u.createdAt,
        totalPurchases: c?.total ?? 0,
        confirmedPurchases: c?.confirmed ?? 0,
      }
    }),
  })
}
