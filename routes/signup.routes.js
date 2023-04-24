import express from "express";
import UserModel from "../models/User.js";
import { hashSync, genSaltSync } from "bcrypt";

const signupRouter = express.Router();
const salt = genSaltSync(10);

signupRouter.post("/signup", async (req, res) => {
  const { userName, firstName, lastName, email, password } = req.body;
  try {
    const userDoc = await UserModel.create({
      userName,
      firstName,
      lastName,
      email,
      password: hashSync(password, salt),
    });

    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

export default signupRouter;
