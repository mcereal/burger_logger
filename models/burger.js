const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
    orm.all("burgers", (result) => cb(result));
  },

  create: function (column, cb) {
    orm.create("burgers", column, function (result) {
      cb(result);
    });
  },

  update: function (columnValue, condition, cb) {
    orm.update("burgers", columnValue, condition, function (result) {
      cb(result);
    });
  },
};

module.exports = burger;
