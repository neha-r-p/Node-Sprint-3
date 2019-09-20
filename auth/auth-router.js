const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");

router.post("/register", (req, res) => {
  let newUser = req.body;
  
  const hash = bcrypt.hashSync(newUser.password, 12);

  newUser.password = hash;

  Users.add(newUser)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(err => {
      console.log("register err", err)
      res.status(500).json({ error: "Error creating new user" })
    })
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
