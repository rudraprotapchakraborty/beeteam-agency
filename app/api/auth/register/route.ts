import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { usersCollection, type UserDoc } from '@/lib/models'
import { normalizePhone, setSessionCookie } from '@/lib/auth'

export async function POST(req: Request) {
  let body: { fullName?: string; phone?: string; password?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const fullName = (body.fullName || '').trim()
  const password = body.password || ''
  const phone = normalizePhone(body.phone || '')

  if (fullName.length < 2) {
    return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 })
  }
  if (!phone) {
    return NextResponse.json(
      { error: 'Enter a valid Bangladeshi phone number (e.g. 01712345678).' },
      { status: 400 },
    )
  }
  if (password.length < 6) {
    return NextResponse.json(
      { error: 'Password must be at least 6 characters.' },
      { status: 400 },
    )
  }

  const users = await usersCollection()
  const existing = await users.findOne({ phone })
  if (existing) {
    return NextResponse.json(
      { error: 'An account with this phone number already exists.' },
      { status: 409 },
    )
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const doc: UserDoc = {
    fullName,
    phone,
    passwordHash,
    isAdmin: false,
    createdAt: new Date(),
  }

  const result = await users.insertOne(doc)
  const sessionUser = {
    id: String(result.insertedId),
    fullName,
    phone,
    isAdmin: false,
  }
  await setSessionCookie(sessionUser)

  return NextResponse.json({ user: sessionUser }, { status: 201 })
}
