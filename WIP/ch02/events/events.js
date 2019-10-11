const events = require('events');
const emitter = new events.EventEmitter();

const doWorkHandler = function clockHandle(){
    console.log('Clocking in...');
     // Fire the data_received event 
     emitter.emit('handle2');
   
}

console.log('*******');

emitter.once('clockHandle',doWorkHandler);

emitter.on('handle2',function () {
    console.log('Write Tests');
    console.log('Code');
    console.log('Refactor');
    console.log('Go to Meeting');
    console.log('*******');
});
emitter.emit('clockHandle');
emitter.emit('handle2');
