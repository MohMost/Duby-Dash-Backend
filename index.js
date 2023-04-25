import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import blogRouter from "./routes/blog.routes.js";
import loginRouter from "./routes/login.routes.js";
import signupRouter from "./routes/signup.routes.js";
import profileRouter from "./routes/profile.routes.js";
import logoutRouter from "./routes/logout.routes.js";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

mongoose.connect(process.env.DATABASE_URI);
app.use(userRouter);
app.use(blogRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(signupRouter);
app.use(profileRouter);
app.listen(process.env.PORT, () => {
  console.log("✅ the server is running !");
});
