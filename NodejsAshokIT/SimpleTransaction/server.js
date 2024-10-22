"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var account_1 = require("./account");
var transaction_1 = require("./transaction");
var server = express();
server.use("/ac", account_1.default);
server.use("/trx", transaction_1.default);
var PORT = 3000;
server.listen(PORT, function () {
    console.log("Server listening on http://locahost:".concat(PORT));
});
