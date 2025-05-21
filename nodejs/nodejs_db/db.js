// Databases

//  RDBMS - PostgresSQL, MySQL

// Read-heavy apps, transaction workloads

//  NoSQL - MongoDB(DocumentDB), Neo4j(GraphDB)

// No need of joins and Data Normalization in NoSQL DB

// distributed computing

// * connecting to MongoDB

// STEPS:

// Go to mongodb website
// Create M0 cluster (free-tier)
// Create a User
// Get the connection string
// install Mongodb Compass

// npm i mongodb to install package for using mongodb on code

const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://tr:vn@cluster.waua.mongodb.net/";

// Connection URL
const client = new MongoClient(url);

// Database Name existing in MongoDB Cluster
const dbName = "sample_mflix";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("users");

  const findRes = await collection.find({}).toArray();
  console.log('found users ->',findRes);

  const data = {
    "_id":{"$oid":"594dcd7885b6"},
    "name":"Ned Stark",
    "email":"sean_bean@gameofthron.es",
    "password":"$2b$12$UREFwsRUoy"
}
  
const insertResult = await collection.insertMany([data]);
console.log('Inserted documents =>', insertResult);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

