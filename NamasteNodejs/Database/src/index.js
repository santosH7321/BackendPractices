import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/database.js";
import User from "./models/user.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Nishant",
    lastName: "Ranjan",
    email: "nishant@gmail.com",
    password: "nishant@123",
    age: 35,
    gender: "male",
  });

  try {
    await user.save();
    res.status(201).send("User added successfully");
  } catch (error) {
    res.status(400).send("Error saving the user",error.message);
  }

  
});
// ROutes

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
