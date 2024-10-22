// http://localhost:8080/login/uname/admin/upwd/admin


import * as express from "express";

let app:any = express();


app.get("/login/uname/:uname/admin/upwd/:upwd", (req:any, res:any):any => {
    if(req.params.uname === "admin" && req.params.upwd === "admin"){
        res.status(200).json({message: "Admin login sucessfuly!"});
    } else {
        res.status(400).json({message: "Login failed!!"});
    }
});

app.listen(8080, () => {
    console.log("Server listening on port number 8080");
});