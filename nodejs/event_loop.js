const fs = require('fs');
const a = 100;

setImmediate(()=> console.log("setImediate"));

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt","utf8", ()=> {
    console.log("file reading callback")
});

setTimeout(()=>console.log("timeout"),0);
process.nextTick(()=> console.log("process.nextTick"));

function print_a() {
    console.log("a:",a);
}
print_a();
console.log("last line of the code");


