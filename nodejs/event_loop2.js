// event loop waits at "Poll" phase after execution

const fs = require('fs');
const a = 100;

setImmediate(()=> console.log("setImediate"));

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt","utf8", ()=> {

    setTimeout(()=>console.log("timeout 2"),0);

    setImmediate(()=> console.log("setImediate 2"));

    process.nextTick(()=> console.log("process.nextTick 2"));

    console.log("file reading callback");
});

setTimeout(()=>console.log("timeout"),0);
process.nextTick(()=> console.log("process.nextTick"));

function print_a() {
    console.log("a:",a);
}
print_a();
console.log("last line of the code");


// O/P:

/*
a: 100
last line of the code
process.nextTick
promise
timeout
setImediate
file reading callback
process.nextTick 2
setImediate 2
timeout 2
*/

// since poll phase is where event loop waits, it executes 'setImmediate 2' first then 'timeout 2' 
// unlike earlier where 'timeout 1' is executed prior to 'setImmediate'