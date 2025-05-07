const fs = require('fs');

setImmediate(()=> console.log("setImediate"));

setTimeout(()=>console.log("timeout"),0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt","utf8", ()=> {
    console.log("file reading callback");
});

process.nextTick(()=> {
    process.nextTick(()=> {
    console.log("process.nextTick");
    });

});

console.log("last line of the file");

// O/P:

// nested nextTick is executed before going to anyother line of code

/*
last line of the file
process.nextTick
promise
timeout
setImediate
file reading callback
*/