import * as express from "express";

let account:any = express.Router();


account.get("/", (req:any, res:any) => {
    res.status(200).json({ message: "Account Details" });
});

account.get("/login", (req:any, res:any):any => {
    if(req.query.uname === 'admin' && res.query.upwd === 'admin'){
        res.status(200).json({ message: "Login Successful" });
    } else {
        res.status(401).json({ message: "Login Failed" });
    }
});


export default account;