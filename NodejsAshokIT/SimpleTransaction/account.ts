import * as express from "express";

const account:any = express();

account.get("/", (req:any, res:any):any => {
    res.status(200).json({message: "List of all account!"});
});

account.post("/account", (req:any, res:any):any => {
    res.status(200).json({message: "Your account is add soon please wait for a while 🙏"});
});


export default account;