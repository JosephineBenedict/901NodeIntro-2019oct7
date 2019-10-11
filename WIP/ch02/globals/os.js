const os = require('os');
const totalmem = os.totalmem();
const freemem = os.freemem();
console.log(`Total memory: $totalmem} Free memory: ${freemem}`);
