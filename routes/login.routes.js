import express from "express";
const loginRouter = express.Router();

loginRouter.post("/login", (req, res) => {
  const { userName, password } = req.body;
  res.json({ requestData: { userName, password } });
});

export default loginRouter;
