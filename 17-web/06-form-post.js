#!usr/bin/node

const http=require('http'),
      qs=require('querystring'),
      log=console.log;
var items=[];
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  if(req.url ==='/' && req.method ==='GET'){
    showPage(req,res);
  }else if(req.url ==='/' && req.method ==='POST'){
     var data;
     req.on('data',(chunk)=>{data+=chunk;});
     req.on('end',()=>{
       var items=qs.parse(data);
       if(items.item !='')items.push(items.item);

     });
     showPage(req,res);
  }else{
     res.statusCode=404;
     res.end('Error!');
  }
}).listen(8080);

function showPage(req,res){
  var html='' 
    +  '<!DOCTYPE html>'  
    +   '<html lang="en">'  
    +   '<head>'  
    +   '<meta charset="UTF-8"/>'  
    +   '<title>Todo List</title>'  
    +   '</head>'  
    +   '<body>'  
    +   '<h1>Todo List!</h1>'  
    +   '<ul>'  
    +   items.map(function(item){return '<li>'+item+'<>'}).join('\n') 
    +   '</ul>'  
    +   '<form method="POST" action="/">'  
    +   '<input type="text" name="item">'  
    +   '<input type="submit" value="Add Item">'  
    +   '</form>'  
    +   '</body>'  
    +   '<html>'; 
    res.end(html);
}
