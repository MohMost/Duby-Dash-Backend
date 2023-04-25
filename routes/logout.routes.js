import express from "express";
import jwt from "jsonwebtoken";

const logoutRouter = express.Router();

logoutRouter.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

export default logoutRouter;
