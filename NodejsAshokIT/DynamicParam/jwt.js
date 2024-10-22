"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var jwt = express();
jwt.get("/user/:uname/upas/:upas", function (req, res) {
    if (req.params.uname === "santosh" && req.params.upas === "santosh") {
        res.status(200).json({ message: "User Login sucessfully 😀" });
    }
    else {
        res.status(401).json({ message: "Login Failed 😥" });
    }
});
jwt.listen(3000, function () {
    console.log("Server starte on port number 3000");
});
