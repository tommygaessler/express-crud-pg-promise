const db = require('./connection');

// method 2
function getAll(tableName, callback) {

  db.any(`SELECT * FROM ${tableName}`, [true])
    .then(function (table) {
      callback(null, table);
    })
    .catch(function (error) {
      callback(error);
    });
}












module.exports = {
  getAll
  // key and value
  // getAll: getAll
};

// method 2 put request
