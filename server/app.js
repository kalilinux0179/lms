import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// default middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:5173", // Explicitly specify the frontend origin
    credentials: true, // Allow cookies to be sent with requests
  })
);

export default app;