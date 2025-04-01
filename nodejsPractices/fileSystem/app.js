const fs = require('fs');


// synchonous Blocking code , asynchronous non-blocking code

//? fs.writeFileSync('santosh.txt', "Hello Santosh and nishant both are friend right!"); // this will create a file with the name santosh.txt and write Hello Santosh! in it
// console.log("File created successfully!"); // this will log the message to the console

// fs.writeFile('nishant.txt', "Hello Nishant jee", (err) => {
//     if (err) {
//         console.log(err); // this will log the error message to the console if there is an error
//     } else {
//         console.log("File created successfully!"); // this will log the message to the console if the file is created successfully
//     }
// })

fs.readFile('./santosh.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    } else{
        console.log(data);
    }
}); 