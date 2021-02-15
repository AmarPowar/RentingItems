import userModel from "../models/userModel";
import { User } from "../util/dataTypes";
class userContoller {
  async addNewUser(userInfo) {
    let userinsertPayload: User = {
      username: userInfo.username,
      address: userInfo.address,
      email_id: userInfo.email_id,
    };
    await userModel.addUser(userinsertPayload);
  }

  async updateUser(userInfo: any) {
    let userinsertPayload = {
      filterCondition: userInfo.filterCondition,
      updateData: userInfo.updateData,
    };
    await userModel.updateUser(userinsertPayload);
  }

  async deleteUser(userInfo) {
    await userModel.deleteUser(userInfo);
  }

  async getUser() {
    let userDetails = await userModel.getUser();
    return userDetails;
  }
}

const userclt = new userContoller();
export default userclt;
