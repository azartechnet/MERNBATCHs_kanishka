let count=0
const intervalid=setInterval(()=>{
    if(count==5)
    {
        clearInterval(intervalid)
        console.log("TimeUp")
    }
    else
    {
        const now=new Date();
        const hours=now.getHours();
        const minute=now.getMinutes();
        const second=now.getSeconds()
        const time=hours+":"+minute+":"+second;
        console.log(time)
        count++;
    }
},3000)