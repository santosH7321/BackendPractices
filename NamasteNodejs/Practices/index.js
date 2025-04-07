import express from "express";
import dotenv from "dotenv";
import User from "./models/userSchema.js";
import validateInput from "./utils/validation.js";
import bcrypt from "bcrypt";
import { connectDB } from "./database/database.js";

const app = express();
dotenv.config();
app.use(express.json());

// POST request API endpoint
app.post("/api/v1/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: passwordHash });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login routes
app.post("/api/v1/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.json({ message: "Logged in successfully", user });
    } catch (err){
        res.status(400).json({ message: err.message });
    }
})

connectDB()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("DB connection failed", err);
    process.exit(1); // Exit the process with failure
  });
