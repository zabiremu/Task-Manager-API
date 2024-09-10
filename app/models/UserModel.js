import mongoose from "mongoose";

const USER = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    user_name: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const USER_MODEL = mongoose.model("user", USER);
export default USER_MODEL;
