import { MongoClient, ServerApiVersion } from "mongodb";

let cachedClient = null;
export const dbCollections = {
    servicesCollection: "services",
    usersCollection: "usersCardoctor",
}
export default async function dbConnect(collectionName) {
  console.log("Connecting to MongoDB...");
  if (!process.env.DB_USER || !process.env.DB_PASSWORD) {
    throw new Error("Please define the DB_USER and DB_PASSWORD environment variables inside .env.local");
  }
  if (cachedClient) {
    return cachedClient.db(process.env.DB_NAME).collection(collectionName);
  }

  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@newcluster.n9akf.mongodb.net/?retryWrites=true&w=majority&appName=newCluster`;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  console.log("MongoDB Client Created");
  await client.connect(); 
  cachedClient = client;

  return client.db(process.env.DB_NAME).collection(collectionName);
}
