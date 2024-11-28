var fs=require('fs')
fs.writeFile('file1.txt',"welcome",function(err){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("FileCreated")
    }
fs.readFile("file1.txt",function(err,data){
    if(err)
        console.log(err)
    else
        console.log(data.toString())
})
})