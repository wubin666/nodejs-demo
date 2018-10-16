#!urs/bin/node

const fs=require('fs');
var dir=process.argv[2];

fs.rmdirSync(dir);//删除空目录
