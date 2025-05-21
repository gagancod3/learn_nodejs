const http = require('node:http');

const server = http.createServer(function(req,res){
    if (req.url === '/secret') {
        res.end("There's no secret!")
    }
    else{
        res.end("Hello World!");
    }
});

server.listen(7000);


