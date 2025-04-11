import express from "express";
import UserAuth from "../middleware/auth.js";
import ConnectionRequestModel from "../models/connectionRequest.js";
const userRouter = express.Router();

// Get all pending connection requests for the logged-in user
userRouter.get("/user/requests/received", UserAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const connectionRequest = await ConnectionRequestModel.find({
        toUserId: loggedInUser._id,
        status: "interested",
    });
    res.status(200).json({
      status: true,
      message: "Connection requests fetched successfully",
      data: connectionRequest,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export default userRouter;
