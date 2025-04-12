import express from "express";
import UserAuth from "../middleware/auth.js";
import ConnectionRequestModel from "../models/connectionRequest.js";
import User from "../models/userShema.js";
const userRouter = express.Router();

const USER_SAFE_DATA =
  "fromUserId firstName lastName photoUrl skills gender about";
// Get all pending connection requests for the logged-in user
userRouter.get("/user/requests/received", UserAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const connectionRequest = await ConnectionRequestModel.find({
      toUserId: loggedInUser._id,
      status: "interested",
    }).populate("fromUserId", [
      "firstName",
      "lastName",
      "photoUrl",
      "skills",
      "gender",
      "about",
    ]);
    res.status(200).json({
      status: true,
      message: "Connection requests fetched successfully",
      data: connectionRequest,
    });
  } catch (error) {
    throw new Error(error);
  }
});

userRouter.get("/user/connections", UserAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const connectionRequest = await ConnectionRequestModel.find({
      $or: [
        { toUserId: loggedInUser._id, status: "accepted" },
        { fromUserId: loggedInUser._id, status: "accepted" },
      ],
    })
      .populate("fromUserId", USER_SAFE_DATA)
      .populate("toUserId", USER_SAFE_DATA);

    const data = connectionRequest.map((row) => {
      if (row.fromUserId._id.toString() === loggedInUser._id.toString()) {
        return row.toUserId;
      }
      return row.fromUserId;
    });

    res.status(200).json({
      status: true,
      message: "Connections fetched successfully",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
});

userRouter.get("/feed", UserAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const connectionRequest = await ConnectionRequestModel.find({
      $or: [{ toUserId: loggedInUser._id }, { fromUserId: loggedInUser._id }],
    }).select("fromUserId toUserId");

    const hideUserFromFeed = new Set();
    connectionRequest.forEach((req) => {
      hideUserFromFeed.add(req.fromUserId.toString());
      hideUserFromFeed.add(req.toUserId.toString());
    });
    console.log(hideUserFromFeed);

    const users = await User.find({
      $and: [
        { _id: { $nin: Array.from(hideUserFromFeed) } },
        { _id: { $ne: loggedInUser._id } },
      ],
    }).select(USER_SAFE_DATA);
    res.send(users);
  } catch (error) {
    throw new Error(error);
  }
});
export default userRouter;
