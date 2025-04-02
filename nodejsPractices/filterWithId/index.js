import express from "express";
import { UserData } from "./userData.js";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1/users/:id", (req, res) => {
  const { id } = req.params;
  const user = UserData.filter((user) => {
    return user.id === parseInt(id);
  });
  res.status(200).send(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
