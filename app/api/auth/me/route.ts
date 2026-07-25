import { NextResponse } from 'next/server'
import { getCurrentUser, getSession, setSessionCookie, type SessionUser } from '@/lib/auth'
import { usersCollection } from '@/lib/models'
import { ObjectId } from 'mongodb'

export async function GET() {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ user: null })
  return NextResponse.json({
    user: {
      id: user.id,
      fullName: user.fullName,
      phone: user.phone,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    },
  })
}

export async function PATCH(req: Request) {
  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  }

  let body: { fullName?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const fullName = (body.fullName || '').trim()
  if (fullName.length < 2) {
    return NextResponse.json({ error: 'Please enter a valid name (at least 2 characters).' }, { status: 400 })
  }

  const users = await usersCollection()
  await users.updateOne(
    { _id: new ObjectId(session.id) },
    { $set: { fullName } }
  )

  const updatedSessionUser: SessionUser = {
    id: session.id,
    fullName,
    phone: session.phone,
    isAdmin: session.isAdmin,
  }
  await setSessionCookie(updatedSessionUser)

  return NextResponse.json({
    user: {
      ...updatedSessionUser,
    },
  })
}
