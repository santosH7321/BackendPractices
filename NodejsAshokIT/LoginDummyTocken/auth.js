"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
// auth
var auth = function (req, res, next) {
    var allHeader = req.headers;
    if (allHeader.tocken === "sky") {
        next();
    }
    else {
        res.status(500).json({ auth: "fail" });
    }
};
// module
app.get("/login", [auth], function (req, res) {
    if (req.params.uname === "santosh" && req.params.upas === "kumar") {
        res.status(200).json({ Login: "Login success!" });
    }
    else {
        res.status(400).json({ Login: "Fail" });
    }
});
var PORT = 8080;
app.listen(PORT, function () {
    console.log("Server listen on port number 8080");
});
