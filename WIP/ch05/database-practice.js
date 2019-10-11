
const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db.schema.createTable("customer", (table) => {
        table.increments("id").primary;
		table.text("firstname");
		table.text("lastname");
		table.text("email");
    });
}).then(() => {
	console.log("Done!");
}).finally(() => {
	db.destroy();
});
