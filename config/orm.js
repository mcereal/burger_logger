const connection = require("../config/connection.js");

const orm = {
  all: (table, cb) => {
    const query = `SELECT * FROM ${table};`;
    connection.query(query, (error, result) => {
      if (error) throw error;
      cb(result);
    });
  },

  create: (table, col, cb) => {
    const query = `INSERT INTO ${table} (burger_type, devoured) VALUES ('${col.toString()}', false);`;
    connection.query(query, (error, result) => {
      if (error) throw error;
      cb(result);
    });
  },

  update: (table, burgerName, cb) => {
    const query = `UPDATE ${table} SET devoured = true WHERE burger_type = ${burgerName}`;
    connection.query(query, (error, result) => {
      if (error) throw error;
      cb(result);
    });
  },
};

module.exports = orm;
