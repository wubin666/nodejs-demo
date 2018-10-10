#!usr/bin/node

const EventEmitter=require('event').EventEmitter;

var emitter=new EventEmitter();
emitter.on('hello',()=>{
  console.log('hello event');
})

var emitter=new EventEmitter();
emitter.on('hello',()=>{
  console.log('HELLO event');
})

console.log(emitter.listeners('hello'));

emitter.on('bye',()=>{
  console.og('bye event');
  process.exit();
});

global.setInterval(()=>{
  emitter.emit('hello');
},500);

global.setTimeout(()=>{
  emitter.emit('bye');
},3000);
