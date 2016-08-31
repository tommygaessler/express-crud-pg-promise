const options = {}; // add options here
const pgp = require('pg-promise')(options); // connects node to postgreSql

// Database connection details;
const connection = {
  host: 'localhost', // 'localhost' is the default;
  port: 5432, // 5432 is the default;
  database: 'beers'
};

const db = pgp(connection); // database instance;

console.log(db);

module.exports = db;
// = db connection = require('./db/connection')

// module.exports = {
//   db // es6 db: db
// }
// = db connection = require('./db/connection').db
// for exporting multiple things
