const express = require("express");

const app = express();



// app.get("/ab?c", (req, res) => {
//     res.send("Hello from /ab?c");
// })

// app.get("/ab+c", (req, res) => {
//     res.send("Hello from /ab+c");
// })

// app.get("/ab*cd", (req, res) => {
//     res.send("Hello from /ab*cd");
// })

// app.get("/a(bc)?d", (req, res) => {
//     res.send("Hello from /a(bc)?d");
// })


// app.get("/a(bc)+d", (req, res) => {
//     res.send("Hello from /a(bc)+d");
// })

// app.get(/a/, (req, res) => {
//     res.send("Hello from /a");
// })

// app.get(/.*fly$/, (req, res) => {
//     res.send("Hello from /.*fly$");
// })

app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params);
    res.send(`User ID: ${req.params.userId}, Name: ${req.params.name}, Password: ${req.params.password}`);
})




// app.get("/user", (req, res) => {
//     res.send("User get the data");
// })

// app.post("/user", (req, res) => {
//     res.send("User successfully, save data in database");
// })

// app.delete("/user", (req, res) => {
//     res.send("User delete successfully");
// })
app.listen(7777, () => {
    console.log("Server is running on port 7777");
})