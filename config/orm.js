const connection = require("../config/connection.js");

const orm = {
  all: (table, cb) => {
    const query = `SELECT * FROM ${table};`;
    connection.query(query, (error, result) => {
      if (error) throw error;
      cb(result);
    });
  },

  create: (table, col1, col2, input, cb) => {
    const query = `INSERT INTO ${table} (${col1}, ${col2}) VALUES ('${input.toString()}', false);`;
    connection.query(query, (error, result) => {
      if (error) throw error;
      cb(result);
    });
  },

  update: (table, columnValue, condition, cb) => {
    const query = `UPDATE ${table} SET ${columnValue} = true WHERE ${condition}`;
    connection.query(query, (error, result) => {
      if (error) throw error;
      cb(result);
    });
  },
};

module.exports = orm;
