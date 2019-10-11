const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db.schema.createTable("weather", (table) => {
		table.text("day");
		table.integer("low");
		table.integer("high");
	});
}).then(() => {
	console.log("Done!");
}).finally(() => {
	db.destroy();
});
