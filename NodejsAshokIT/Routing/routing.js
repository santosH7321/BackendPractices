"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/santosh", function (req, res) {
    res.status(200).json({ message: "Welcome to typescript with nodejs" });
});
app.get("/santosh/:userName", function (req, res) {
    res.status(200).json({ message: "Welcome, ".concat(req.params.userName, "!") });
});
app.listen(8080, function () {
    console.log("Server listening on port 8080");
});
