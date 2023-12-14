const express = require("express");
const app = express();

//load config from env file

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//Middleware to parse json request body

app.use(express.json());

//Import routes for todo API

const todoRoutes = require("./routes/todos");

//Mount the todoes api routes

app.use("api/v1", todoRoutes);

//start server

app.listen(PORT, () => {
    console.log(`Your server is starte at ${PORT}`);
})

// connection to the database 

const dbConnect = require("./config/database");
dbConnect();

//defult routes 
app.get("/", (req, res) => {
    res.send(`<h1> This is HOMEPAGE </h1>`);
})
