import mongoose, { Schema } from "mongoose";

const userSchem = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: ""
    },
    role: {
      type: String,
      enum: ["Student", "Instructor"],
      default: "Student"
    }
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchem);
