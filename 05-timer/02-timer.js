#!usr/bin/node

console.log('start...');
var count=0;
var timeID=setInterval(loop,500);
function loop(){
  console.log('I will loop forever');
  if(++count===10) global.clearInterval(timeID);
}
/*
global.setTimeout(()=>{
  global.clearInterval(timeID);
  console.log('end');
},3000);
*/
