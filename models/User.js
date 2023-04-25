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
      default:
        "https://firebasestorage.googleapis.com/v0/b/pokemoh-ad0fa.appspot.com/o/icons%2Fdefault_profile.svg?alt=media&token=8fc6a686-be65-4cf8-908c-344fc033e0fa",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", userSchemas);

export default UserModel;
