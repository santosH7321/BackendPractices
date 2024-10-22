import * as express from "express";

const app:any = express();

// auth

let auth:any = (req:any, res:any, next:any):any => {
    let allHeader = req.headers;
    if(allHeader.tocken === "sky"){
        next();
    } else {
        res.status(500).json({auth: "fail"});
    }
};

// module

app.get("/login",[auth], (req:any, res:any):any => {
    if(req.params.uname === "santosh" && req.params.upas === "kumar"){
        res.status(200).json({Login: "Login success!"});
    } else {
        res.status(400).json({Login: "Fail"});
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server listen on port number 8080");
});