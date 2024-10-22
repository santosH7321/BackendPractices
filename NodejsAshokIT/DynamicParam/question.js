"use strict";
// http://localhost:8080/login/uname/admin/upwd/admin
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/login/uname/:uname/admin/upwd/:upwd", function (req, res) {
    if (req.params.uname === "admin" && req.params.upwd === "admin") {
        res.status(200).json({ message: "Admin login sucessfuly!" });
    }
    else {
        res.status(400).json({ message: "Login failed!!" });
    }
});
app.listen(8080, function () {
    console.log("Server listening on port number 8080");
});
