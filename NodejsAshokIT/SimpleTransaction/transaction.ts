import * as express from "express";

const transaction:any = express();

transaction.get("/", (req:any, res:any):any => {
    res.status(200).json({message: "Transaction soon!!"});
});

transaction.get("/pending", (req:any, res:any):any => {
    res.status(200).json({message: "Pending transactions found!!"});
});

transaction.get("/completed", (req:any, res:any):any => {
    res.status(200).json({message: "Completed transactions found!!"});
});

export default transaction;