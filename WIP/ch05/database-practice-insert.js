const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db("customer").insert([{
		firstname: "zack",
		lastname: "ben",
		email: "zben@gmail.com"
	}, {
		firstname: "vero",
		lastname: "benedict",
		email: "vbenedict@gmail.com"
    }
    , {
		firstname: "Joe",
		lastname: "smith",
		email: "jsmith@gmail.com"
    }]);
}).then(() => {
	console.log("Changed name of all the Joes!");
	return db("customer").update({
		firstname: "John"
	}).where({
		email: "jsmith@gmail.com"
    });
}).then(() => {
    console.log("Select!");
    return db("customer");
}).then((customer) => {
	console.log("All the customer:", customer);
}).then(() => {
	console.log("Done!");
}).finally(() => {
	db.destroy();
});
