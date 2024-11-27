var f1=require('fs')
f1.readFile('sample1.txt',function(err,data){
    if(err)
        console.log("Error")
    else
        console.log("Yourdata is::"+data.toString())
})