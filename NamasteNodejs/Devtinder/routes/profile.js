import express from 'express';
import UserAuth from "../middleware/auth.js";

const profileRouter = express.Router();


profileRouter.get("/api/v1/profile", UserAuth, async (req, res) => {
    try {
      const user = req.user;
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send("Server Error");
    }
  });

export default profileRouter;