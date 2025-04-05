import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Database connect befor the server starts
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
