"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var account = express();
account.get("/", function (req, res) {
    res.status(200).json({ message: "List of all account!" });
});
account.post("/account", function (req, res) {
    res.status(200).json({ message: "Your account is add soon please wait for a while 🙏" });
});
exports.default = account;
