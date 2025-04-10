import express from "express";
import UserAuth from "../middleware/auth.js";

const requestRouter = express.Router();

requestRouter.post("/api/v1/sendConnectionRequest", UserAuth, async (req, res) => {
    const user = req.user;
    res.send(user.firstName + " " + "Sending a connection request");
  }
);

export default requestRouter;
