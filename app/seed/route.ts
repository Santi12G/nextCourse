import { MongoClient } from "mongodb";
import { users, customers, invoices, revenue } from "../lib/placeholder-data"; 
// ajusta la ruta según dónde esté ese archivo

const uri = "mongodb://localhost:27017";
const dbName = "dashboard"; // usa el nombre real de tu DB

async function seed() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Conectado a MongoDB");

    const db = client.db(dbName);

    // Limpio las colecciones (opcional pero recomendado)
    await db.collection("users").deleteMany({});
    await db.collection("customers").deleteMany({});
    await db.collection("invoices").deleteMany({});
    await db.collection("revenue").deleteMany({});

    // Inserto los datos
    await db.collection("users").insertMany(users);
    await db.collection("customers").insertMany(customers);
    await db.collection("invoices").insertMany(invoices);
    await db.collection("revenue").insertMany(revenue);

    console.log("Datos insertados correctamente ✅");
  } catch (error) {
    console.error("Error haciendo seed:", error);
  } finally {
    await client.close();
  }
}

seed();
