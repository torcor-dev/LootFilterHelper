import { connectToDatabase } from '../../../utils/mongodb'
import { ObjectId } from 'mongodb';

async function handlePut(query, body) {
  /**@type {MongoClient} */
  const { db } = await connectToDatabase()
  const { id } = query
  //console.log(query)
  
  const filterId = { _id: ObjectId(id) }
  const updateElement = { $set: body }

  const filterExists = await db.collection("filter").findOne(filterId)

  if (!filterExists) {
    try {
      console.log("Saving new filter:", id)
      const filter = await db.collection("filter").findOne({})
      filter._id = ObjectId(id)
      await db.collection("filter").insertOne(filter)
    } catch (e) {
      console.log("Tried to insert even though it already exists. Exists = ", !filterExists)
    }

  }

  try {
    const response = await db.collection("filter").updateOne(filterId, updateElement)
    return response
  } catch(e) {
    console.log(e)
    return
  }
} 

async function handleGet(query, body) {
  const { db } = await connectToDatabase()
  const { id } = query
  const filterId = { _id: ObjectId(id) }
  try {
    const response = await db.collection("filter").findOne(filterId)
    return response
  } catch(e) {
    console.log(e)
    return
  }


}


const handledMethods = {
  PUT: handlePut,
  GET: handleGet,
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


