import { connectToDB } from "../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDB();
  const usuarios = await db.collection("usuarios").find().toArray();
  res.status(200).json(usuarios);
}