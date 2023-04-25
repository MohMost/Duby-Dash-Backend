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
      default: "../assets/default_profile.svg",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", userSchemas);

export default UserModel;
