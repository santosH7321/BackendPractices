const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log(`Server Started on port number: 3000`);
});

app.get('/', (req, res) => {
  res.send("Hello, how are you?");
});

app.post('/api/cars', (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car submitted successfully");
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testDataCollection', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
