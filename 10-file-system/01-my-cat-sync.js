#!urs/bin/node

const fs=require('fs');

var file=process.argv[2] || __filename;
try{
  console.log(fs.readFileSync(file).toString('utf8'));
}catch(err){
   console.log(err.message,err.name);
   process.exit(100);
}

