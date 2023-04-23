import mongoose from "mongoose";

const blogSchemas = new mongoose.Schema(
  {
    blogTitle: {
      type: String,
      required: true,
    },
    blogContent: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    profilePicture: {
      type: String,
      required: false,
      default: "https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206",
    },
    blogCategory: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.model("blogs", blogSchemas);

export default BlogModel;
