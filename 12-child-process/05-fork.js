#!usr/bin/node

const cp=require('child_process');

console.log('I am father.PID:',process.pid);
cp.fork('./02-child.js');

global.setTimeout(()=>{
  console.log('I am father goodbye!');
  process.exit();
},6000)
