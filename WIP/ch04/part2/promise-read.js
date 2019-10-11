const Promise= require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

console.log("lets start");
Promise.try(() => {
    return fs.readFileAsync("input.txt");
}).then((data)=>{
    console.log(`Asynchronous read : ${data.toString()}`);
}).catch((err) =>{
    console.log(`Error: err`);
});