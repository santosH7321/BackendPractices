import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = mongoose.connect(process.env.MONGO_URI);


export const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    orders: {
        type: Array,
        default: []
    },
    contact: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        default: 'https://www.w3schools.com/howto/img_avatar.png'
    }
});

connectDB.model('User', userSchema);
const User = mongoose.model('User', userSchema);