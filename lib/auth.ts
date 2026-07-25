import 'server-only'
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import { ObjectId } from 'mongodb'
import { usersCollection, type UserDoc } from '@/lib/models'

/* ---------------------------------------------------------------
   Session handling: signed JWT stored in an httpOnly cookie.
   --------------------------------------------------------------- */

export const SESSION_COOKIE = 'bt_session'
const SESSION_DAYS = 7

function getSecret(): Uint8Array {
  const secretString = process.env.JWT_SECRET
  if (!secretString) {
    throw new Error(
      'Missing JWT_SECRET. Copy .env.local.example to .env.local and set a long random secret.',
    )
  }
  return new TextEncoder().encode(secretString)
}

export type SessionUser = {
  id: string
  fullName: string
  phone: string
  isAdmin: boolean
}

type TokenPayload = {
  sub: string
  fullName: string
  phone: string
  isAdmin: boolean
}

export async function createSessionToken(user: SessionUser): Promise<string> {
  return new SignJWT({
    fullName: user.fullName,
    phone: user.phone,
    isAdmin: user.isAdmin,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DAYS}d`)
    .sign(getSecret())
}

/** Write the session cookie. Call from a Server Action / Route Handler. */
export async function setSessionCookie(user: SessionUser): Promise<void> {
  const token = await createSessionToken(user)
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  })
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

/** Read + verify the session token, returning the token payload (fast, no DB). */
export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  if (!token) return null
  try {
    const { payload } = await jwtVerify<TokenPayload>(token, getSecret())
    return {
      id: payload.sub as string,
      fullName: payload.fullName,
      phone: payload.phone,
      isAdmin: payload.isAdmin,
    }
  } catch {
    return null
  }
}

/** Load the fresh user record from the DB for the current session. */
export async function getCurrentUser(): Promise<(SessionUser & { createdAt: Date }) | null> {
  const session = await getSession()
  if (!session) return null
  let objectId: ObjectId
  try {
    objectId = new ObjectId(session.id)
  } catch {
    return null
  }
  const users = await usersCollection()
  const user = await users.findOne({ _id: objectId })
  if (!user) return null
  return toSessionUser(user)
}

export function toSessionUser(user: UserDoc): SessionUser & { createdAt: Date } {
  return {
    id: String(user._id),
    fullName: user.fullName,
    phone: user.phone,
    isAdmin: user.isAdmin,
    createdAt: user.createdAt,
  }
}

/** Normalize a Bangladeshi phone number to 11 digits (01XXXXXXXXX). */
export function normalizePhone(input: string): string | null {
  const digits = input.replace(/\D/g, '')
  // Accept +8801XXXXXXXXX / 8801XXXXXXXXX / 01XXXXXXXXX
  let local = digits
  if (local.startsWith('880')) local = local.slice(2) // -> 01XXXXXXXXX (leading 0 kept)
  if (local.length === 10 && local.startsWith('1')) local = '0' + local
  if (/^01\d{9}$/.test(local)) return local
  return null
}
