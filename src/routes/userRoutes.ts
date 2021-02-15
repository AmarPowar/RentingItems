import express from "express";
var router = express.Router();
import userController from "../Controllers/userContoller";

router.get("/profile", async function (req, res) {
  const user = await userController.getUser();
  console.log("user===", user);
  res.status(200).send(user);
});

router.post("/addUser", async (req, res) => {
  let userInfo: any = req.body;
  const user = await userController.addNewUser(userInfo);
  res.status(200).send(user);
});

/*
 here we are passing user name to update 
 preRequest for api 
 provide valid user name
*/
router.put("/updateUser", async function (req, res) {
  let updateUserInfo: any = req.body;
  const user = await userController.updateUser(updateUserInfo);
  res.status(200).send(user);
});

/*
 here we are passing user name to delete 
 preRequest for api 
 provide valid user name
*/

router.delete("/deleteUser/:username", async function (req, res) {
  let deleteUserInfo: any = req.params;
  const user = await userController.deleteUser(deleteUserInfo);
  res.status(200).send(user);
});

export default router;
