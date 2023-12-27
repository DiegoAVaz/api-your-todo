const express = require("express");
const cors = require("cors");
const app = express();
const { router } = require("./router");

app.use(express.json());
app.use(cors());
app.use(router);

app.get("/", (req, res) => {
  return res.status(200).send("API To Do List");
});

module.exports = {
  app,
};
