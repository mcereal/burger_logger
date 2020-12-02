const orm = require("../config/orm.js");

const burger = {
  all: function (callback) {
    orm.all("burgers", function (result) {
      callback(result);
    });
  },

  create: function (column, callback) {
    orm.create("burgers", column, function (result) {
      callback(result);
    });
  },

  update: function (columnValue, condition, callback) {
    orm.update("burgers", columnValue, condition, function (result) {
      callback(result);
    });
  },

  delete: function (condition, callback) {
    orm.delete("burgers", condition, function (result) {
      callback(result);
    });
  },
};

module.exports = burger;

// const orm = require("../config/orm.js");

// const burger = {
//   all: (cb) => orm.all("burgers", (result) => cb(result)),
//   create: (col, cb) => orm.create("burgers", col, (result) => cb(result)),
//   update: (col, bool, cb) =>
//     orm.update("burgers", col, bool, (result) => cb(result)),
//   delete: (bool, cb) => orm.delete("burgers", bool, (result) => cb(result)),
// };

// module.exports = burger;
