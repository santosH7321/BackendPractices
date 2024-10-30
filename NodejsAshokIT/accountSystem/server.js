"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var account_1 = require("./account");
var transaction_1 = require("./transaction");
var cards_1 = require("./cards");
var app = express();
app.use("/account", account_1.default);
app.use("/transaction", transaction_1.default);
app.use("/cards", cards_1.default);
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server listening on port no. ".concat(PORT));
});
