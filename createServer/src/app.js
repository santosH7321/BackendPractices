const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("Hello this is tesing purpose");
})

app.use("/hello", (req, res) => {
    res.send("Hello jee kaise hai app");
})

app.listen(7777, () =>  {
    console.log("Server is running on port 7777");
})