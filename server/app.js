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
    path: "*",
  })
);

export default app;