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
  var html=fs.readFileSync('todo-list-temlate.html').toString('utf8');
  
  var content =items.map(function(item){return '<li>'+item +'</li>';}).join('\n');
  log(content);
  html=html.replace('%',content);
  log(html);
  //res.end(html);
}
