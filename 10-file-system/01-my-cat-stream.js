#!urs/bin/node

const fs=require('fs');
var file=process.argv[2] || __filename;

var src=fs.createReadStream(file);

src.on('error',(err)=>{
  console.error(err.message);
  process.exit(1);
})

src.on('open',function(){
  console.log('open');
  this.pipe(process.stdout);
})


//fs=createReadStream(file).pipe(process.stdout);
//process.on('uncaughtException',(err)=>{
//  console.log(err.message);
//  process.exit(100);
//})
