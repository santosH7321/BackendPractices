const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
const blog = require("./routs/blog")
//mount
app.use("app/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})

app.get("/", (req, res) => {
    res.send(`<h1>This is my home page babby </h1>`);
})