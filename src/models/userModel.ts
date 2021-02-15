import dbConfig from "../dbConfig/db";
import { User } from "../util/dataTypes";

class userModel {
  collectionName: string;

  constructor() {
    this.collectionName = "users";
  }
  async addUser(userData: User) {
    let db = await dbConfig.connect();
    const res = await db
      .collection(this.collectionName)
      .insertOne(userData, { upsert: true });
    return res.result;
  }

  async updateUser(userData: { filterCondition: any; updateData: any }) {
    let db = await dbConfig.connect();
    const res = await db
      .collection(this.collectionName)
      .updateOne(
        userData.filterCondition,
        { $set: userData.updateData },
        { upsert: true }
      );
    return res.result;
  }

  async deleteUser(deleteCondition: any) {
    let db = await dbConfig.connect();
    const res = await db
      .collection(this.collectionName)
      .deleteOne(deleteCondition);
    return res.result;
  }

  async getUser() {
    let db = await dbConfig.connect();
    const res = await db.collection(this.collectionName).find({}).toArray();
    return res;
  }
}

const user = new userModel();
export default user;
