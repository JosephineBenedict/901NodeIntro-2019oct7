
const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db("weather").max("high");
}).then((weather) => {
	console.log("Highest of weather:", weather);
}).finally(() => {
	db.destroy();
});
