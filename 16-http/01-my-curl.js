#!usr/bin/node

const http=require('http'),
      url=require('url');

var address=process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

const options={
  hostname:url.parse(address).hostname,
  post:url.parse(address).port,
  path:url.parse(address).pathname,
  method:'POST',
  headers:{
    'User-Agent':'01-my-curl.js'
  }
};



http.get(address,(res)=>{
  console.log(`${res.httpVersion} ${res.statusCode} ${res.statusMessage}`)
  console.log(res.headers);
  console.log();
  res.pipe(process.stdout);
})
