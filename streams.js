var fs = require('fs');

var readableStream= fs.createReadStream('input.txt');
var data='';
readableStream.setEncoding('UTF8');
readableStream.on('data',function(chunk){
    data+=chunk;
});
readableStream.on('end',function(){
console.log(data);
});

var writedata="Hello world";
var writeablestream=fs.createWriteStream('output.txt');
writeablestream.write(writedata,'utf-8');
writeablestream.end();
writeablestream.on('finish',function(){
console.log("write completed");
});

