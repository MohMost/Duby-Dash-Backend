import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const profileRouter = express.Router();
const secretKey = process.env.SECRET_KEY;

profileRouter.use(cookieParser());

profileRouter.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secretKey, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});
export default profileRouter;
