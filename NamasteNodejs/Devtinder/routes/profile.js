import express from "express";
import UserAuth from "../middleware/auth.js";
import { validateEditProfileData } from "../utils/validation.js";

const profileRouter = express.Router();

profileRouter.get("/api/v1/profile/view", UserAuth, async (req, res) => {
  try {
    const user = req.user;
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

profileRouter.patch("/api/v1/profile/edit", UserAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      return res.status(400).send("Invalid Edit request!");
    }
    const loggedInUser = req.user;
    Object.keys(req.body).forEach((key) => {
      loggedInUser[key] = req.body[key];
    });
    
    await loggedInUser.save();

    res.status(200).send(`${loggedInUser.firstName} your profile is updated successfully!`);
  } catch (error) {
    res.status(400).send("Invalid Edit request!");
  }
});

export default profileRouter;
