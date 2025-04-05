import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../Database/database.js";
import User from "../Models/userSchema.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.post("/api/v1/signup", async (req, res) => {
    const userObj = new User({
        firstName: "SKY",
        lastName: "Ranjan",
        email: "skys@gmail.com",
    });
    await userObj.save();
    res.status(201).json({ message: "User created successfully" });
})



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
