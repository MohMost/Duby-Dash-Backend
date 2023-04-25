import express from "express";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";
import { config } from "dotenv";

config();

const loginRouter = express.Router();
const secretKey = process.env.SECRET_KEY;

loginRouter.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const userDoc = await UserModel.findOne({ userName });
  const isPassOk = compareSync(password, userDoc.password);
  if (isPassOk) {
    jwt.sign(
      { userName, id: userDoc._id, profilePicture: userDoc.profilePicture },
      secretKey,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: userDoc._id,
          userName,
        });
      }
    );
  } else {
    res.status(400).json("wrong credentials");
  }
});

export default loginRouter;
