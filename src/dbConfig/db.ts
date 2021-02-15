const MongoClient = require("mongodb").MongoClient;

class DbConfig {
  async connect() {
    // Connection URL
    const url = "mongodb://localhost:27017";
    // Database Name
    const dbName = "EduCrackDB";
    // Use connect method to connect to the server
    let client = await MongoClient.connect(url, { useUnifiedTopology: true });
    let db = client.db(dbName);
    return db;
  }
}

const dbInstance = new DbConfig();
export default dbInstance;
