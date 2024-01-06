
const EventEmitter = require('events')
const event = new EventEmitter();

event.on('subscribe',()=>{
    console.log('Thanks for subscribing to college wallah ');
    
});

event.emit('subscribe');
