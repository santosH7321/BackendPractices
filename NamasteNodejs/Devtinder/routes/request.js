import express from "express";
import UserAuth from "../middleware/auth.js";
import ConnectionRequestModel from "../models/connectionRequest.js";

const requestRouter = express.Router();

requestRouter.post(
  "/request/send/:status/:toUserId",
  UserAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      const ConnectionRequest = new ConnectionRequestModel({
        fromUserId,
        toUserId,
        status,
      });

      const data = await ConnectionRequest.save();
      res.json({
        message: "Connection request sent successfully",
        data: data,
      });

    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
    res.send(user.firstName + " " + "Sending a connection request");
  }
);

export default requestRouter;
