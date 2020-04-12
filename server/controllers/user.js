const User = require("../db/models").User;
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const saltRounds = 10;

  bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
    if (err) {
      res.status(500).send(err);
    } else {
      try {
        const newUser = await User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          password: hash,
        });

        res.send({ success: __filterOutPassword(newUser) });
      } catch (err) {
        res.status(500).send(err);
      }
    }
  });
};

const loginUser = (req, res) => {
  res.send({ "User logged in ": __filterOutPassword(req.user) });
};

const getCurrentUser = (req, res) => {
  req.user
    ? res.send(__filterOutPassword(req.user))
    : res.send("User not logged in");
};

const logoutUser = (req, res) => {
  req.logout();
  res.send("User logged out");
};

const __filterOutPassword = (user) => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
  };
};

module.exports = { createUser, loginUser, getCurrentUser, logoutUser };
