const fs = require('fs');
const crypto = require('crypto');

//* Default setting*
// since size of thread pool is 4, when we execute more than 4 tasks like crypto which are assigned to thread pool
// 4 tasks come up together and the other ones come after a pause.

// Custom setting**

// we can alter thread pool size as per our requirements

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("password","salt",500000,50,"sha512", (err,key)=> {
    console.log("1 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password","salt",500000,50,"sha512", (err,key)=> {
    console.log("2 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password","salt",500000,50,"sha512", (err,key)=> {
    console.log("3 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password","salt",500000,50,"sha512", (err,key)=> {
    console.log("4 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password","salt",500000,50,"sha512", (err,key)=> {
    console.log("5 - cryptoPBKDF2 done");
});



