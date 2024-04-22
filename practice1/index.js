const fs = require("fs");
const express = require('express');
const app = express();
const port = 3000;

function calculateSum(counter) {
    var sum = 0;
    for (var i = 0; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function handleRequest(req, res) {
    var counter = req.query.counter;
    var sum = calculateSum(counter); // Renamed variable to avoid conflict
    // console.log(sum);
    var answer = "the sum is " + sum; // Concatenated the sum value correctly
    res.send(answer);
}

app.get('/', handleRequest); // Corrected function name

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// function callbackFn(err, data) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// }
// fs.readFile("a.txt", "utf-8", callbackFn);
 