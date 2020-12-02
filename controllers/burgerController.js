const express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.all((data) => res.render("index", { burgers: data }));
});

router.post("/api/burgers", (req, res) => {
  burger.create([req.body.name], (result) => res.json({ id: result.insertId }));
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows == 0) res.status(404).end();
      else res.status(200).end();
    }
  );
});
module.exports = router;
