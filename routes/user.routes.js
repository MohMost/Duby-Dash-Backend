import express from "express";
const userRouter = express.Router();
import UserModel from "../models/User.js";

userRouter.get("/getUser", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(result);
      console.log("successful get request !");
    }
  });
});

userRouter.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
  console.log("successful post request !");
});
userRouter.delete("/deleteUser/:id", async (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
});

export default userRouter;
