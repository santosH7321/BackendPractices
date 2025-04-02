import express from 'express';
import { Data } from './data.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=> {
    res.send("Hello World")
})

app.get("/api/v1/data", (req, res) => {
    const { name } = req.query;
    if (name) {
        const user = Data.filter((user) => {
            return user.name === name;
        })
        res.status(200).send(user);
    }
    res.status(200).json(Data);
})

// router params
app.get("/api/v1/data/:id", (req, res) => {
    const { id } = req.params;
    // console.log(id);
    const user = Data.filter((user) => {
        return user.id === parseInt(id);
    })
    res.status(200).send(user);
})
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})