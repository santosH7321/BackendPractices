import express from "express";
import { adminAuth, userAuth } from "./auth.js";
const app = express();

app.use("/admin", adminAuth);
app.get("/admin/getAlldata", (req, res) => {
  res.send("All data fetched successfully");
});
// app.use("/user", userAuth);


app.get("/user", userAuth, (req, res) => {
    res.send("User data fetched successfully from user route");
})
app.get("/admin/getAlldata", (req, res) => {
  res.send("All data fetched successfully");
});

app.get("/admin/delete", (req, res) => {
  res.send("Data deleted successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
