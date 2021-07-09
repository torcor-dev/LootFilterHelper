import { connectToDatabase } from '../../../utils/mongodb'
import { ObjectId } from 'mongodb';

async function handlePut(query, body) {
  /**@type {MongoClient} */
  const { db } = await connectToDatabase()
  const { id } = query
  //console.log(query)
  
  const filterId = { _id: ObjectId(id) }
  const updateElement = { $set: body }

  const defaultFilter = await db.collection("filter").findOne({})

  let newFilter = false
  if (defaultFilter._id.equals(id)) {
    console.log("Original filter used creating new one.")
    filterId._id = new ObjectId()
    defaultFilter._id = filterId._id
    await db.collection("filter").insertOne(defaultFilter)
    newFilter = true
  }

  try {
    const response = await db.collection("filter").updateOne(filterId, updateElement)
    if (newFilter) response["newFilterId"] = filterId
    return response
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


