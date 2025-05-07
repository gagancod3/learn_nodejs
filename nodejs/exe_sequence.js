let a = 10;
let b = 20;

// read files library
const fs = require("fs");
const crypto = require("node:crypto"); // OR  require("crypto"); BOTH WORK SAME

// sync read (*Not recommended* but it's available if needed)
// since it's a synchronous function (read fn), it'll block the main thread for JS

// const sync_data = fs.readFileSync("./file.txt","utf8");
// console.log("sync Data: ", sync_data);

// crypto

// Sync
// pbkdf2Sync - Provides a synchronous Password-Based Key Derivation Function 2 (PBKDF2) implementation

// const key = crypto.pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
// console.log(key.toString("hex")); // '3745e48...08d59ae'

//Async

crypto.pbkdf2("password","salt",500000, 10, "sha512", (err,key)=> {
    console.log("Key is generated: ",key);
});


//API call
const https = require("https");
https.get("https://dummyjson.com/test", (resp) => {
  console.log("response fetched");
  // console.log("response fetched: ", resp);
});

//setTimeout()
setTimeout(() => {
  console.log("executed after 5 seconds");
}, 5000);

//file read (async)
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data: ", data);
});

function multiplyNum(p, q) {
  const result = p * q;
  return result;
}
console.log("product is: ", multiplyNum(a, b));

// setTimeout(zero)

// it doesn't execute right away but only once synchronous code is executed.

