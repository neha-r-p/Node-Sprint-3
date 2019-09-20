const db = require("../database/dbConfig.js");

module.exports = {
  add,
  // find,
  findBy,
  findById
};

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
