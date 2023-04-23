import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import blogRouter from "./routes/blog.routes.js";
import loginRouter from "./routes/login.routes.js";
import signupRouter from "./routes/signup.routes.js";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors({ credentials: true }));

mongoose.connect(
  "mongodb+srv://mohlost:Sexetoy69@e-commerce.ezrdcvt.mongodb.net/E-commerce?retryWrites=true&w=majority"
  //mongodb+srv://mohlost:Sexetoy69@e-commerce.ezrdcvt.mongodb.net/E-commerce?retryWrites=true&w=majority
);
app.use(userRouter);
app.use(blogRouter);
app.use(loginRouter);
app.use(signupRouter);
app.listen(3001, () => {
  console.log("the server is running !");
});
