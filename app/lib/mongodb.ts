// lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

const uri = "mongodb://localhost:27017"; // Puerto correcto de MongoDB
const dbName = "mi_basededatos";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDB(): Promise<Db> {
  if (cachedDb && cachedClient) {
    // ya conectado, reutilizamos
    return cachedDb;
  }

  const client = new MongoClient(uri);
  await client.connect(); // ⚡ se conecta solo una vez
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return db;
}
