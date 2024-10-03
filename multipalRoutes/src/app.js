const express = require("express");
const app = express();

app.use("/user", (req, res, next) => {
    console.log("This is middleware for user");
    next();
}, 
    (req, res, next) => {
        console.log("Handling the routes user2!!");
        next();
    },
    (req, res) => {
        res.send("This is user 3");
    }
);
app.listen(7777, () => {
    console.log("Server is running on port 7777");
})