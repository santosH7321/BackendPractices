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
    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    } else {
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

app.delete("/api/v1/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.status(200).send("User deleted successfully", user);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
});

// Update user by id
app.patch("/api/v1/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALL_UPDATE_FIELDS = [
      "photoUrl",
      "about",
      "gender",
      "age",
      "skills",
    ];
    const isUpadeAllowed = Object.keys(data).every((k) =>
      ALL_UPDATE_FIELDS.includes(k)
    );
    if (!isUpadeAllowed) {
      return res.status(400).json({ message: "Invalid update fields" });
    }

    if(data?.skills.length > 10){
      return res.status(400).json({ message: "Skills can't exceed 10" });
    }


    await User.findByIdAndUpdate({ _id: userId }, data);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(404).json({ message: "User not found" });
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
