const EventEmitter=require('events')

var e2=new EventEmitter();

var fun1=(msg)=>{
    console.log("Function1"+msg)
}

var fun2=(msg)=>{
    console.log("Function2"+msg)
}

//Register the fun1 and fun2
e2.on('myevent',fun1)
e2.on('myevent',fun2)

// console.log(e2.listeners('myevent')) //Returns an array of listeners for 'myevent' event
//Triggering the event will call all registered functions
e2.emit('myevent','Hello World');