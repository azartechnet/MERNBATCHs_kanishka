const express=require('express')
const app=express()
const PORT=3000;

app.use(express.urlencoded({extended:false}))
app.post('/',function(req,res){
    console.log(req.body)
    res.end()
})
app.listen(PORT,function(){
    console.log('server is running on port 3000')
    })