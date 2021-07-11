import { connectToDatabase } from '../../../utils/mongodb'
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  const defaultFilter = await db.collection("filter")
    .findOne({"_id": ObjectId("60e81740b565781aa4fdfd80")})

  res.status(200).json(defaultFilter)
} 
