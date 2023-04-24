import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import blogRouter from "./routes/blog.routes.js";
import loginRouter from "./routes/login.routes.js";
import signupRouter from "./routes/signup.routes.js";
import { config } from "dotenv";
config();
const app = express();

app.use(express.json());
app.use(cors({ credentials: true }));

mongoose.connect(process.env.DATABASE_URL);
app.use(userRouter);
app.use(blogRouter);
app.use(loginRouter);
app.use(signupRouter);
app.listen(3001, () => {
  console.log("the server is running !");
});
