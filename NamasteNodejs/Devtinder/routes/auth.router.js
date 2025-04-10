import express from "express";
import validateSignupData from "../utils/validation.js";
import User from "../models/userShema.js";
import bcrypt from "bcrypt"; 

const authRouter = express.Router();

authRouter.post("/api/v1/signup", async (req, res) => {
  try {
    // Validate the  data
    validateSignupData(req);
    // Encrypt the password
    const { firstName, lastName, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    // creating new instance
    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    // save into DB
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

authRouter.post("/api/v1/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Create jwt token
    const token = await user.getJWT();
    // cookie parser
    res.cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) });

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).send("User not found" + error);
  }
});




export default authRouter;
