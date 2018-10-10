#!usr/bin/node

const http=require('http'),
      path=require('path'),
      fs=require('fs');

var file;

http.createServer((req,res)=>{
   //console.log(req.header);
   console.log(req.url);
   file=path.join(__dirname,req.url);
  fs.createReadStream(file).pipe(res);
  //try{
  //res.end(fs.readFileSync(file).toString('utf8'));
  //}catch(err){
  //res.end(err.message);
 //}
}).listen(8080);
