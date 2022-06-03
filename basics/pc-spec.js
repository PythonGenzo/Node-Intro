const os = require('os');

console.log("Free Memory", os.freemem());
console.log("Free Memory", os.freemem() / 1024 /1024 /1024);
console.log("Total Memory", os.totalmem() / 1024 /1024 /1024);
console.log("os Version", os.version());
console.log("CPU", os.cpus());




