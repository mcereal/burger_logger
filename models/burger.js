const orm = require("../config/orm.js");

const burger = {
  all: (cb) => orm.all("burgers", (result) => cb(result)),
  create: (col, cb) => orm.create("burgers", col, (result) => cb(result)),
  update: (col, bool, cb) =>
    orm.update("burgers", col, bool, (result) => cb(result)),
  delete: (bool, cb) => orm.delete("burgers", bool, (result) => cb(result)),
};

module.exports = burger;
