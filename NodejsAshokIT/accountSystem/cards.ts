import * as express from "express";

const cards:any = express.Router();

cards.post("/", (req:any, res:any):any => {
    res.status(200).json({"message": "Welcome to cards modules!"});
});

export default cards;