#!usr/bin/node

const http=require('http'),
           cp=require('child_process');
http.createServer((req,res)=>{
    Var cmd=cp.spawn('./02-child.js');
       Cmd.stdout.pipe(res);

}).listen(8080);
