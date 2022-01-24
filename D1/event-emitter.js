const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//above are two ways to create event emitter

//methods
//on => listens for an event
//emit => emit an event

customEmitter.on('response', ()=>{
    console.log(`data received`);
})


customEmitter.on('response', (name, id)=>{
    console.log(`data received again ${name} and ${id}`);
})

customEmitter.emit('response', 'name', 'id')

//we can listen for response only before emitting it not after
// customEmitter.on('response', (name, id)=>{
//     console.log(`data received again ${name} and ${id}`);
// })