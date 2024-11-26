var h1=require('http')
h1.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('<h1>Helloworld</h1>')
}).listen(8080)
console.log("Server is Running...")