import mongoose from "mongoose";
import validator from "validator";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email format.");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Invalid gender. Must be male, female, or others.");
        }
      },
    },
    about: {
      type: String,
      maxlength: 500,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    photoUrl: {
      type: String,
      default: "https://example.com/default-avatar.png",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid photo URL format.");
        }
      },
    },
    skills: {
      type: [String],
      validate(value) {
        if (!Array.isArray(value)) {
          throw new Error("Skills must be an array.");
        }
      },
    },
  },
  { timestamps: true }
);

userSchema.index({
  firstName: 1,
  lastName: 1,
});

userSchema.methods.getJWT = async function () {
  // in aero funtion it will be not work
  const user = this;
  const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECREAT, {
    expiresIn: "1d",
  });
  return token;
};

userSchema.methods.validatePassword = async function (passwordInputByUser) {
  const user = this;
  const passwordHash = user.password;

  const isPasswordValid = await bcrypt.compare(
    passwordInputByUser,
    passwordHash
  );
  return isPasswordValid;
};

const User = mongoose.model("User", userSchema);
export default User;
