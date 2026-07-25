import { type Collection, type ObjectId } from 'mongodb'
import { getDb } from '@/lib/mongodb'

/* ---------------------------------------------------------------
   Collection document shapes + typed accessors.
   --------------------------------------------------------------- */

export type UserDoc = {
  _id?: ObjectId
  fullName: string
  phone: string // normalized: 11 digits, e.g. 01712345678
  passwordHash: string
  isAdmin: boolean
  createdAt: Date
}

export type PurchaseStatus = 'pending' | 'verified' | 'rejected'
export type PaymentMethod = 'bkash' | 'nagad'

export type PurchaseDoc = {
  _id?: ObjectId
  userId: ObjectId
  showDate: string // e.g. "2026-08-15"
  showLabel: string // human label, e.g. "Fri, 15 Aug 2026"
  showTime: string // e.g. "7:30 PM"
  method: PaymentMethod
  payTo: string // the bKash/Nagad number the buyer sent to
  amount: number // BDT
  senderNumber: string // buyer's sending number
  transactionId: string
  status: PurchaseStatus
  createdAt: Date
  verifiedAt: Date | null
}

let indexesReady: Promise<void> | null = null

async function ensureIndexes(): Promise<void> {
  const db = await getDb()
  await db.collection<UserDoc>('users').createIndex({ phone: 1 }, { unique: true })
  await db.collection<PurchaseDoc>('purchases').createIndex({ userId: 1, createdAt: -1 })
  await db.collection<PurchaseDoc>('purchases').createIndex({ transactionId: 1 })
}

async function withIndexes(): Promise<void> {
  if (!indexesReady) indexesReady = ensureIndexes()
  return indexesReady
}

export async function usersCollection(): Promise<Collection<UserDoc>> {
  await withIndexes()
  const db = await getDb()
  return db.collection<UserDoc>('users')
}

export async function purchasesCollection(): Promise<Collection<PurchaseDoc>> {
  await withIndexes()
  const db = await getDb()
  return db.collection<PurchaseDoc>('purchases')
}
