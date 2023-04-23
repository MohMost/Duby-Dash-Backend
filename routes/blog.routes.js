import express from "express";
const blogRouter = express.Router();
import BlogModel from "../models/Blog.js";

blogRouter.get("/getblog", (req, res) => {
  BlogModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(result);
      console.log("successful get request !");
    }
  });
});

blogRouter.post("/createBlog", async (req, res) => {
  const blog = req.body;
  const newBlog = new BlogModel(blog);
  await newBlog.save();
  res.json(blog);
  console.log("successful post request !");
});
blogRouter.delete("/deleteBlog/:id", async (req, res) => {
  const id = req.params.id;
  BlogModel.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
});

export default blogRouter;
