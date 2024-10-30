import * as express from "express";

let transaction:any = express.Router();
const auth1:any = (req:any, res:any, next:any):any => {
    let allHeader:any = req.headers;
    let token:any = allHeader.token;

    if(token === "abc123") {
        next();
    } else {
        res.status(401).json({message: "Unauthorized Access"});
    }
};

const auth2:any = (req:any, res:any, next:any) => {
    let allHeader:any = req.headers;
    let wish = allHeader.wish;
    if(wish === "hello"){
        next();
    } else {
        res.status(403).json({message: "Forbidden Access"});
    }
};

transaction.get("/transaction",[auth1, auth2], (req:any, res:any) => {
    res.status(200).json({message: "Transaction Details"});
});

export default transaction;
