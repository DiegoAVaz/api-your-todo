const knex = require("knex");
const knexConfig = require("../../knexfile");

const db = knex(knexConfig.todo_db);

module.exports = {
  db,
};
