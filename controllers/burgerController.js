const express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.post("/", (req, res) => {
  burger.create([req.body.name], (result) => res.json({ id: result.insertId }));
});

router.put("/:id", (req, res) => {
  const condition = `id = ${req.body.devoured}`;

  burger.create(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const condition = `id = ${req.body.id}`;

  burger.delete(condition, (result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
