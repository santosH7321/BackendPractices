import * as express from "express";

let app:any = express();

app.get("/santosh", (req:any, res:any):any => {
    res.status(200).json({message: "Welcome to typescript with nodejs"});
});

app.get("/santosh/:userName", (req:any, res:any):any => {
    res.status(200).json({message: `Welcome, ${req.params.userName}!`});
});
app.listen(8080, () => {
    console.log("Server listening on port 8080");
});