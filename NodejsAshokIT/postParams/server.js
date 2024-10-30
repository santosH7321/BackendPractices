"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
// Authorization code
var auth = function (req, res, next) {
    var allHeader = req.headers;
    var token = allHeader.token;
    if (token === 'nodejs') {
        next();
    }
    else {
        res.status(401).json({ auth: "Fail" });
    }
};
// Create the post request
app.post("/login", [auth], function (req, res) {
    if (req.body.uname === 'admin') {
        res.status(200).json({ message: "Login successful!" });
    }
    else {
        res.status(400).json({ message: "Login failed!" });
    }
});
app.listen(8080, function () {
    console.log("Server listening on port number 8080");
});
