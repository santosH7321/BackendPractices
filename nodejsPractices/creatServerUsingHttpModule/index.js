const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Hello World!");
})

server.listen(8080, () => {
    console.log("Server is running on port 8080");
})