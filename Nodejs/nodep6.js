var fs=require('fs')
//Synchrous read
var data=fs.readFileSync('sample1.txt')
console.log(data.toString())

//Asynchrous read

fs.readFile('sample1.txt',function(err,data){
    if(err)
    {
        console.log("Error")
    }
    else
    {
        console.log("Your data is::"+data.toString())
    }
})