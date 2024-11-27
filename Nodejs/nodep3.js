var f1=require('fs')
f1.open('sample.txt',function(err,data){
    if(err)
    {
        console.log("Error")
    }
    else
    {
        console.log("File Opend")
    }
})