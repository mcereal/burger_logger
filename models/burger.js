const orm = require("../config/orm.js");

const burger = {
  all: (cb) => orm.all("burgers", (result) => cb(result)),
  create: (column, cb) => orm.create("burgers", column, (result) => cb(result)),
  update: (columnValue, condition, cb) =>
    orm.update("burgers", columnValue, condition, (result) => cb(result)),
};

module.exports = burger;
