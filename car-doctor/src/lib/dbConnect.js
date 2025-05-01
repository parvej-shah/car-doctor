const { MongoClient, ServerApiVersion } = require("mongodb");


export default async function dbConnect(collectionName) {
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@newcluster.n9akf.mongodb.net/?retryWrites=true&w=majority&appName=newCluster`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
return client.db("car-doctor").collection(collectionName);

}