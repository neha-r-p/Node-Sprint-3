const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");
const secrets = require("./secrets.js");

router.post("/register", (req, res) => {
  let newUser = req.body;

  const hash = bcrypt.hashSync(newUser.password, 12);

  newUser.password = hash;

  Users.add(newUser)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      console.log("register err", err);
      res.status(500).json({ error: "Error creating new user" });
    });
});

router.post("/login", (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ error: "You shall not pass!" });
      }
    });
});

function generateToken(user) {
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
