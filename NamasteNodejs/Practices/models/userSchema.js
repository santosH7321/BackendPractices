import mongoose from "mongoose";
import validator, { trim } from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
      trim: true,
      uppercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,

      validator(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email format.");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      trim: true,

      validator(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error(
            "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol."
          );
        }
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Dummyuser", userSchema);
export default User;
