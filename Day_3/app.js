const express = require("express");
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Hello, World!'); // Sending a response when the root URL is accessed
});

 // You can use any port you prefer
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});