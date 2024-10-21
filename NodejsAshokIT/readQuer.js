let url = require("url");

let http = require("http");
let server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});

    // parse the request
    let obj = url.parse(req.url, true).query;

    if(obj.uname === "santosh" && obj.upwd === "santosh"){
        res.write("<h1>Login Success</h1>");
    } else {
        res.write("<h1>Login Failed</h1>");
    }
    res.end();
});


server.listen(8080, () => {
    console.log("listening on port 8080");
})