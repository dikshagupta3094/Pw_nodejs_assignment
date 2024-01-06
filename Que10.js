
const EventEmitter = require('events')

const event = new EventEmitter()


console.log('The Default maximum number of event listner are:', event.getMaxListeners())
event.setMaxListeners(5)
console.log('The updated maximum number of event listner are:', event.getMaxListeners())

