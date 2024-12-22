import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import GenerateToken from "../utils/GenerateToken.js";

// register
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

// login
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
      GenerateToken(res, user);
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

// logout
export const logout = async (req, res) => {
  try {
    return res.status(200)
    .cookie("token", null, {
      maxAge: 0,
    })
    .json({
success:true,
message:"Logout Successfull"
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success:false,
      message:"Internal Server Error"
    })
  }
};