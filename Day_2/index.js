const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Hello, Jee'); // Sending a response when the root URL is accessed
});

// Route with a parameter
const userId = 'santoshkumar123@gmail.com';
app.get('/users/userId', (req, res) => {
    // const userId = req.params.userId; // Access the parameter
    // Perform actions based on the parameter
    res.send(`User ID: ${userId}`);
});

const user = "SantoshKumar";
app.get('/users', (req, res) =>{
    res.send(`User name: ${user}`);
});

const secondUser = "Nishant Ranjan";
app.get('/users/2', (req, res)=>{
    res.send(`Second userName: ${secondUser}`);
});

app.get('/sum', (req, res) => {
    function sum(num1, num2){
        return num1 + num2;
    }
    const result = sum(2, 3);
    // console.log(result);
    res.send(`Your result is: ${result}`);
});

app.get('/diff', (req, res) =>{
    function diff(num1, num2){
        diffrence = (num1 - num2);
        return diffrence;
    }
    const finalResult = diff(5, 3);
    res.send(`Your diffrence is: ${finalResult}`);
});

const PORT = 3000; // You can use any port you prefer
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});