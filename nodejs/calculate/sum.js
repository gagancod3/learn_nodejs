
function calSum(a,b) {
    let sum = a + b;

    console.log(sum);
}

// with ES module pattern

// export function calSum(a,b) {
//     let sum = a + b;

//     console.log(sum);
// }

let abc = 'sum is calculating...'

// exporting function 'calSum'

//  syntax -> 
// if only single export 
// module.exports = nameOfFunction

// module.exports = calSum; 


// for mutiple export
// module.exports = {abc: abc , func1: func1 }

console.log(module.exports);  // {} - empty object 

module.exports = {abc,calSum};

// we can also write like :
// module.exports.calSum = calSum;

