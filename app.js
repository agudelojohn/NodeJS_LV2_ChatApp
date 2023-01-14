const express = require("express");
const routes = require("./network/routes");

var app = express();
app.use(express.json());

// Routes
routes(app);

app.use("/", (req, res) =>
  res.status(200).type("json").send({ message: "Welcome to my chat" })
);

module.exports = app;
