import express from "express";
const loginRouter = express.Router();
import UserModel from "../models/User.js";
loginRouter.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const userDoc = await UserModel.findOne({ userName });
  console.log(userDoc);
});

export default loginRouter;
