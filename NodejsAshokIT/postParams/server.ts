import * as express from "express";
import * as bodyparser from "body-parser";

const app: any = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));


// Authorization code

let auth:any = (req:any, res:any, next:any):any => {
    let allHeader:any = req.headers;
    let token:any = allHeader.token;
    if(token === 'nodejs'){
        next();
    } else {
        res.status(401).json({auth: "Fail"});
    }
};

// Create the post request

app.post("/login", [auth], (req:any, res:any):any => {
    if(req.body.uname === 'admin'){
        res.status(200).json({message: "Login successful!"});
    } else {
        res.status(400).json({message: "Login failed!"});
    }
});

app.listen(8080, () => {
    console.log("Server listening on port number 8080");
});
