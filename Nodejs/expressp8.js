const exp=require('express')
const app=exp()
const PORT=3001;

//Multiple Routing

const r1=exp.Router();

const r2=exp.Router();

const r3=exp.Router();

r1.get("/",function(req,res){
    res.send("UserPage")
})
r2.get("/",function(req,res){
    res.send("AdminPage")
})
r3.get("/",function(req,res){
    res.send("AddUser")
})

app.use("/user",r1)
app.use("/admin",r2)
app.use("/add",r3)

app.listen(PORT,function(err){
    if(err)console.log(err)
        console.log("Server is Running...")
})