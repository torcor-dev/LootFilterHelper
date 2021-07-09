import { connectToDatabase } from '../../../utils/mongodb'
import { ObjectId } from 'mongodb';

async function handlePut(query, body) {
  /**@type {MongoClient} */
  const { db } = await connectToDatabase()
  const { id } = query
  //console.log(query)
  
  const filter = { _id: ObjectId(id) }
  const updateElement = { $set: body }

  try {
    return await db.collection("filter").updateOne(filter, updateElement)
  } catch(e) {
    console.log(e)
    return
  }
} 


const handledMethods = {
  PUT: handlePut,
};

export default async function handler(req, res) {
  if (!handledMethods[req.method]) {
    res.status(400).json({ error: req.method });
    return;
  }
  const response = await handledMethods[req.method](req.query, req.body);

  if (!response) {
    res.status(400).json({ error: "400" });
    return;
  }

  res.status(200).json(response);
}


