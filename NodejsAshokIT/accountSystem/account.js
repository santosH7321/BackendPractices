"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var account = express.Router();
account.get("/", function (req, res) {
    res.status(200).json({ message: "Account Details" });
});
account.get("/login", function (req, res) {
    if (req.query.uname === 'admin' && res.query.upwd === 'admin') {
        res.status(200).json({ message: "Login Successful" });
    }
    else {
        res.status(401).json({ message: "Login Failed" });
    }
});
exports.default = account;
