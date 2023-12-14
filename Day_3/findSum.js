// const { count } = require('console');
const express = require('express');
const app = express();



function calculateSum(counter){
    var sum = 0;
    for(var i = 0; i<=counter; i++){
        sum = sum + i;

    }
    return sum;
}
function handleFirstRequest(req, res){
    var calculateSum = calculateSum(100);
    var answer = "The sum is " + calculateSum;
    res.send(answer);
}

app.get('/handleSum', handleFirstRequest);


const PORT = 3002;
app.listen(PORT, ()=>{
    console.log(`Server is runnig at port: ${PORT}`);
});