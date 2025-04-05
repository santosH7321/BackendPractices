import express from "express";
import dotenv from "dotenv";
import User from "../models/userShema.js";
import { connectDB } from "../Database/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Find one user by email
app.get("/api/v1/oneuser", async (req, res) => {
  const userEamil = req.body.email;
  try {
    const user = await User.find({ email: userEamil });
    if(user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    } 
    else {
      res.status(200).send(user);
    }

  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
});


app.get("/api/v1/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).send(users);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
});
app.post("/api/v1/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
