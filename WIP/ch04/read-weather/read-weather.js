 //const weather= require('./weather.json');
 const {promisify} = require('util')
 const fs = require('fs')
const readFileAsync = promisify(fs.readFile)
// console.log(weather);
// c

// console.log("lets start");
// Promise.try(() => {
//     return  fs.readFileAsync("weather.json");
// }).then((data)=>{
    
//     console.log(`Asynchronous read : ${JSON.parse(data)}`);
// }).catch((err) =>{
//     console.log(`Error: ${err}`);
// });

readFileAsync(`${__dirname}/weather.json`, {encoding: 'utf8'})
  .then(contents => {
    const weatherArray = JSON.parse(contents);
    console.log(weatherArray);

    weatherArray.forEach(element => {
        console.log(element.day)
    });
  })
  .catch(error => {
    console.log(error);
  });