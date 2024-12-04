//importing event
const EventEmitter=require('events')
//Initializing event emitter instance
var e2=new EventEmitter()
//listening to event
e2.on("id1",(msg)=>{
    console.log(msg)
})
//emitting event
e2.emit("id1","hello")