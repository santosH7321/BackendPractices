import mongoose from 'mongoose';


export const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    bgColor: {
        type: String
    },
    panelColor: {
        type: String
    },
    textColor: {
        type: String
    },
});

connectDB.model('Product', productSchema);
const User = mongoose.model('Product', productSchema);