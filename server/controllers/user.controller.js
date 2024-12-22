import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({
      success: false,
      message: "User is already Registered",
    });
  }
  const hashedPassword = await bcryptjs.hash(password, 10);
  await User.create({
    username,
    email,
    password: hashedPassword,
  });
  return res.status(200).json({
    success: true,
    user,
    message: "Registered Successfully",
  });
};

export const login = async (req, res) => {
  const { email, password } = await req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All Fields are required",
    });
  }

  const user = await User.findOne({ email });
  if (user) {
    const isPasswordMatch = await bcryptjs.compare(password, user.password);
    if (isPasswordMatch) {
      return res.status(200).json({
        success: true,
        message: "Login successfull",
        user,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Invalid Credentials",
    });
  }
};
