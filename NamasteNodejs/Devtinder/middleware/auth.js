import jwt from "jsonwebtoken";
import User from "../models/userShema.js";
import dotenv from "dotenv";

dotenv.config();

const UserAuth = async (req, res, next) => {
  try {
    // Read the token from the request cookies
    const cookies = req.cookies;
    const { token } = cookies;

    // Verify the token
    const decodedObj = await jwt.verify(token, process.env.JWT_SECREAT);

    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res
      .status(401)
      .json({ message: "Not authorized, token is missing or invalid" });
  }
};

export default UserAuth;
