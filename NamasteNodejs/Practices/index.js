import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/database.js";

const app = express();
dotenv.config();
app.use(express.json());

// POST request API endpoint
app.post("/api/v1/signup", (req, res) => {
  // const { name, email, password } = req.body;
  res.send("post call");
});

connectDB()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("DB connection failed", err);
    process.exit(1); // Exit the process with failure
  });
