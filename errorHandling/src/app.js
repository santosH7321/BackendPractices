const express = require("express");
const app = express();

app.get("/test", (req, res, next) => {
    next();
}, 
    (req, res) => {
        res.send("Hello from /test");
    }
);

app.get("/test/play", (req, res) => {
    res.send("Hello from test/play");
})
app.listen(7777, () => {
    console.log("Server listening on port number: 7777");
})