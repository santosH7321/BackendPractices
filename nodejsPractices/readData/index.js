import express from 'express';
import { Data } from './data.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=> {
    res.send("Hello World")
})

app.get("/api/v1/data", (req, res) => {
    res.status(200).json(Data);
})
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})