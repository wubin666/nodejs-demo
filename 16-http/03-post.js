#!usr/bin/node

const http=require('http'),
      url=require('url');

//var address=process.argv[2] ||'http://localhost:8080';
var option={
  hostname:url.parse(address).hostname,
  post:url.parse(address).post,
  path:url.parse(address).pathname,
  headers:{
    'User-Agent':'03-post.js'
  }
}

var req=http.request(options,(res)=>{
   console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
   console.log(res.headers);
   console();
  res.pipe(process.stdout);
});

req.end('name:wangding');
