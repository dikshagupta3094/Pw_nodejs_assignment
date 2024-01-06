const EventEmitter = require('events')
const event =  new EventEmitter()

let fun1 = (msg)=>{
    console.log(`Message from fun1 ${msg}`);
}

console.log('Calling Event before removing an event');
event.on('myevent',fun1)
event.emit('myevent','Hello welcome to the world of node js')
console.log('Calling event after removing an event');
event.removeListener('myevent',fun1)
event.emit('myevent','Event occur')