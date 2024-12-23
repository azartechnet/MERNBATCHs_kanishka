const express=require('express')
const app=express()


app.all('/user',function(req,res,next){
    console.log('user route')
    next()
}).listen(3001)
console.log("Server is Running...")
