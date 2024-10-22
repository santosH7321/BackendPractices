import * as express from "express";

const jwt:any = express();

jwt.get("/user/:uname/upas/:upas", (req:any, res:any):any => {
    if(req.params.uname === "santosh" && req.params.upas === "santosh"){
        res.status(200).json({message: "User Login sucessfully 😀"});
    } else {
        res.status(401).json({message: "Login Failed 😥"})
    }
});

jwt.listen(3000, () => {
    console.log("Server starte on port number 3000");
})