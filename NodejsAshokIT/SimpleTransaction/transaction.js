"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction = express();
transaction.get("/", function (req, res) {
    res.status(200).json({ message: "Transaction soon!!" });
});
transaction.get("/pending", function (req, res) {
    res.status(200).json({ message: "Pending transactions found!!" });
});
transaction.get("/completed", function (req, res) {
    res.status(200).json({ message: "Completed transactions found!!" });
});
exports.default = transaction;
