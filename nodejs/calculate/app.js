
//commonjs pattern
require("./test");

const util = require("node:util");

// util.

//when importing single 
// const calSum = require("./sum"); // importing function from sum.js file

// when importing multiple, we import object from source file

// const obj = require("./sum");

// const { calSum } = require("./calculate/sum");
// const {calMul} = require("./calculate/multiply");

// or

// const {calSum, calMul} = require("./calculate/index");
//we can even skip the index
const {calSum, calMul} = require("./calculate");

const data = require("./data.json");
// ES module pattern
// import { calSum } from "./sum.js";

// 'globalThis' is standardized by OpenJS
// console.log(globalThis);


console.log(JSON.stringify(data));
var uname = 'Gagan'
console.log(uname);

let a = 10;
let b = 20;
// calSum(a,b)

let abc = "calculating..."

// console.log(obj.abc);
// obj.calSum(a,b); //30

console.log(abc);
calSum(a,b);
calMul(a,b);


