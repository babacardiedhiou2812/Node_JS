const http = require("http");
const server = http.createServer();
server 
.on( "request", (req, res) => {
    console.log(`In comes a request to ${req.url}`);
    if (req.url ==="/"){  
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end("<h2 style='color:#ff0040'>welcome to home pages </h2>");
    }
    else if (req.url === "/about"){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end("<h2 style='color:#ff0040'>About</h2>");
    } else {
        res.statusCode = 404;
        res.end("<h2 style='color:#ff0040'>Page Not Found </h2>");    
    }

});


listen(1337,() => {
    console.log("Server listening at : http://127.0.0.1:1337");
});