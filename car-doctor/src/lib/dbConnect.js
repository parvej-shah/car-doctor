import { MongoClient, ServerApiVersion } from "mongodb";

let cachedClient = null;

export default async function dbConnect(collectionName) {
  if (cachedClient) {
    return cachedClient.db("car-doctor").collection(collectionName);
  }

  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@newcluster.n9akf.mongodb.net/?retryWrites=true&w=majority&appName=newCluster`;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect(); 
  cachedClient = client;

  return client.db("car-doctor").collection(collectionName);
}
