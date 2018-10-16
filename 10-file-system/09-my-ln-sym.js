#!usr/bin/node

const fs=require=('fs');

var src=process.argv[2],
    link=process.argv[3];
fs.symlinkSync(src,link);
