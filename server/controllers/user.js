const models = require("../db/models");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const saltRounds = 10;

  bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
    if (err) {
      res.status(500).send(err);
    } else {
      try {
        const newUser = await models.User.create({
          name: req.body.name,
          email: req.body.email,
          accountType: req.body.accountType,
          password: hash,
        });
        res.send({ success: newUser });
      } catch (err) {
        res.status(500).send(err);
      }
    }
  });
};

const loginUser = (req, res) => {
  res.send({ "User logged in ": req.user });
};

const getCurrentUser = (req, res) => {
  req.user ? res.send(req.user) : res.send("User not logged in");
};

const logoutUser = (req, res) => {
  req.logout();
  res.send("User logged out");
};

module.exports = { createUser, loginUser, getCurrentUser, logoutUser };
