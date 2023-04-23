import mongoose from "mongoose";

const userSchemas = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
      required: false,
      default: "https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", userSchemas);

export default UserModel;
