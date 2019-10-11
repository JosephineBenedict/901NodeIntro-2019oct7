

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db("weather").insert([{
		day: "Monday",
		low: 42,
		high: 88
	}, {
		day: "Tuesday",
		low: 57,
		high: 90
	}, {
		day: "Wednesday",
		low: 60,
		high: 85
	}, {
		day: "Thursday",
		low: 70,
		high: 99
	}, {
		day: "Friday",
		low: 33,
		high: 45
	}]);
}).then(() => {
	console.log("Done!");
}).finally(() => {
	db.destroy();
});
