var fs=require('fs')
var data="java"
//Append the file
fs.appendFile('file1.txt',data,function(err){
    if(err) throw err;
    console.log("Data Appended")
})