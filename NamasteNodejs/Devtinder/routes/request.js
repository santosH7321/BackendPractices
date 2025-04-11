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
        message: "Connection request sent successfully",
        data: data,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
);

export default requestRouter;
