import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    try {
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})