import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nameName:{
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    }
});
const User = mongoose.model("User", userSchema);
export default User;