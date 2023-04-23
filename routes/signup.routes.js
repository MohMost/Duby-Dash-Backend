import express from "express";
const signupRouter = express.Router();
import UserModel from "../models/User.js";
signupRouter.post("/signup", async (req, res) => {
  const { userName, firstName, lastName, email, password } = req.body;

  const userDoc = await UserModel.create({
    userName,
    firstName,
    lastName,
    email,
    password,
  });

  res.json(userDoc);
});

export default signupRouter;
