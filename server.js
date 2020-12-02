const express = require("express");
const bodyParser = require("body-parser");

const burgerController = require("./controllers/burgerController");
const burger = require("./models/burger.js");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

app.use("/api/burgers", burgerController);

app.listen(PORT);
console.log(`Listening on ${PORT}`);
