// express.js is a framework for building web applications in Node.js
import express from 'express';

// This will help conn to the db
import db from "../config/db.js";

// This helps convert the id from string to ObjectId for the _id
import { ObjectId } from 'mongodb';

// use this to define routes
// routes will be added as a middleware & will take control of requests starting with path /record
const router = express.Router();

// to get list of all records
router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let result = await collection.find({}).toArray();
  res.send(result).status(200);
})

// This section will help get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = { _id: ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not Found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record || new data like in sql insert
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

// This section will update a record by id
router.patch("/:id", async (req, res) => { 
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const update = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };
    
    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);

  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// This section will delete a record
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    
    const collection = await db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;
