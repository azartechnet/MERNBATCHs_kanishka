var h1=require('http')
h1.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>HelloWorld</h1>')

}).listen(8080)
console.log("Server is Running..")