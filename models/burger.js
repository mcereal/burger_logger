const orm = require("../config/orm.js");

const burger = {
  all: (cb) => orm.all("burgers", (result) => cb(result)),
  create: (column, cb) =>
    orm.create("burgers", "burger_type", "devoured", column, (result) =>
      cb(result)
    ),
  update: (columnValue, condition, cb) =>
    orm.update("burgers", "devoured", condition, (result) => cb(result)),
};

module.exports = burger;
