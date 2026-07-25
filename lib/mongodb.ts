import { MongoClient, type Db } from 'mongodb'

/* ---------------------------------------------------------------
   Cached MongoDB client.
   In development Next.js hot-reloads modules, so we stash the
   client promise on `globalThis` to avoid opening a new pool on
   every reload. The env check is deferred to first use so the app
   can still build / render pages that don't touch the database.
   --------------------------------------------------------------- */

type GlobalWithMongo = typeof globalThis & {
  _btMongoClientPromise?: Promise<MongoClient>
}

const globalWithMongo = globalThis as GlobalWithMongo

function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error(
      'Missing MONGODB_URI. Copy .env.local.example to .env.local and set your MongoDB connection string.',
    )
  }

  if (process.env.NODE_ENV === 'development') {
    if (!globalWithMongo._btMongoClientPromise) {
      globalWithMongo._btMongoClientPromise = new MongoClient(uri).connect()
    }
    return globalWithMongo._btMongoClientPromise
  }

  if (!globalWithMongo._btMongoClientPromise) {
    globalWithMongo._btMongoClientPromise = new MongoClient(uri).connect()
  }
  return globalWithMongo._btMongoClientPromise
}

export async function getDb(): Promise<Db> {
  const dbName = process.env.MONGODB_DB || 'beeteam'
  const client = await getClientPromise()
  return client.db(dbName)
}
