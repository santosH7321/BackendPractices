import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../Database/database.js";
import cookieParser from "cookie-parser";




dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());


import authRouter from "../routes/auth.router.js";
import profileRouter from "../routes/profile.js";
import requestRouter from "../routes/request.js";
import userRouter from "../routes/user.js";



app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);


connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });
