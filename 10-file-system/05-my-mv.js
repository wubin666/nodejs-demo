#!usr/bin/node

const fs=require('fs');

var fs=process.argv[2],
    dst=process.argv[3];

fs.renameSync(src,dst);
