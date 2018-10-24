#!usr/bin/node

const cp=require('child_process');

var cat=cp.spawn('cat',['./a.txt']);
var sort=('sort');
var uniq=('uniq');

cat.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin);
uniq.stdout.pipe(process.stdin);
