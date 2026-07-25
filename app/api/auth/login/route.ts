import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { usersCollection } from '@/lib/models'
import { normalizePhone, setSessionCookie, toSessionUser } from '@/lib/auth'

export async function POST(req: Request) {
  let body: { phone?: string; password?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const phone = normalizePhone(body.phone || '')
  const password = body.password || ''

  if (!phone || !password) {
    return NextResponse.json(
      { error: 'Enter your phone number and password.' },
      { status: 400 },
    )
  }

  const users = await usersCollection()
  const user = await users.findOne({ phone })
  // Compare even when user is missing to reduce timing signal.
  const hash = user?.passwordHash || '$2a$10$invalidinvalidinvalidinvalidinvalidinvalidinvalidin'
  const ok = await bcrypt.compare(password, hash)

  if (!user || !ok) {
    return NextResponse.json(
      { error: 'Incorrect phone number or password.' },
      { status: 401 },
    )
  }

  const sessionUser = toSessionUser(user)
  await setSessionCookie({
    id: sessionUser.id,
    fullName: sessionUser.fullName,
    phone: sessionUser.phone,
    isAdmin: sessionUser.isAdmin,
  })

  return NextResponse.json({
    user: {
      id: sessionUser.id,
      fullName: sessionUser.fullName,
      phone: sessionUser.phone,
      isAdmin: sessionUser.isAdmin,
    },
  })
}
