"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction = express.Router();
var auth1 = function (req, res, next) {
    var allHeader = req.headers;
    var token = allHeader.token;
    if (token === "abc123") {
        next();
    }
    else {
        res.status(401).json({ message: "Unauthorized Access" });
    }
};
var auth2 = function (req, res, next) {
    var allHeader = req.headers;
    var wish = allHeader.wish;
    if (wish === "hello") {
        next();
    }
    else {
        res.status(403).json({ message: "Forbidden Access" });
    }
};
transaction.get("/transaction", [auth1, auth2], function (req, res) {
    res.status(200).json({ message: "Transaction Details" });
});
exports.default = transaction;
