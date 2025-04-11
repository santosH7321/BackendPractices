import express from "express";
import UserAuth from "../middleware/auth.js";
import ConnectionRequestModel from "../models/connectionRequest.js";
import User from "../models/userShema.js";

const requestRouter = express.Router();

requestRouter.post(
  "/request/send/:status/:toUserId",
  UserAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      const allwoedStatus = ["ignored", "interested"];
      if (!allwoedStatus.includes(status)) {
        return res.status(400).json({
          message: "Invalid status type: " + status,
        });
      }

      // IF there is an existing connection request;
      const existingConnectionRequest = await ConnectionRequestModel.findOne({
        $or: [
          { fromUserId, toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });
      if (existingConnectionRequest) {
        return res.status(404).json({
          message: "Connection request already exists",
        });
      }

      const toUser = await User.findById(toUserId);
      if (!toUser) {
        return res.status(400).json({
          message: "User not found",
        });
      }

      const ConnectionRequest = new ConnectionRequestModel({
        fromUserId,
        toUserId,
        status,
      });

      const data = await ConnectionRequest.save();
      res.json({
        message:
          req.user.firstName + " is " + status + " in " + toUser.firstName,
        data: data,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
);

requestRouter.post(
  "/request/review/:status/:requestId",
  UserAuth,
  async (req, res) => {
    try {
      const loggedInUser = req.user;
      const { status, requestId } = req.params;
      const allwoedStatus = ["accepted", "rejected"];
      if (!allwoedStatus.includes(status)) {
        return res.status(400).json({
          message: "Invalid status type: " + status,
        });
      }
      const connectionRequest = await ConnectionRequestModel.findOne({
        _id: requestId,
        toUserId: loggedInUser._id,
        status: "interested",
      });

      if (!connectionRequest) {
        return res.status(404).json({
          message: "Connection request not found",
        });
      }
      connectionRequest.status = status;
      const data = await connectionRequest.save();
      res.json({
        message: loggedInUser.firstName + " has " + status + " the request",
        data: data,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
);

export default requestRouter;
