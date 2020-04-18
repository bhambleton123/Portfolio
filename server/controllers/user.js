const User = require("../db/models").User;
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const saltRounds = 10;

  if (req.body.password.length < 6) {
    res.status(400).send({ error: "Password must be greater than six" });
  }
  if (
    !/^(((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/.test(
      req.body.password
    )
  ) {
    res.status(400).send({
      error: "Passwords must contain one or more letters and numbers",
    });
  }

  if (/[\n# $&:\n\t]/.test(req.body.username)) {
    res.status(400).send({
      error: "Username must not contain white spaces",
    });
  }

  if (
    /[^A-Za-z]/.test(req.body.firstName) ||
    /[^A-Za-z]/.test(req.body.lastName)
  ) {
    res.status(400).send({
      error:
        "First and last names must contain only letters and no white space",
    });
  }

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
        res.status(422).send(err);
      }
    }
  });
};

const loginUser = (req, res) => {
  res.send({ User: __filterOutPassword(req.user) });
};

const getCurrentUser = (req, res) => {
  req.user
    ? res.send({ User: __filterOutPassword(req.user) })
    : res.send({ User: null });
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

module.exports = {
  createUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  __filterOutPassword,
};
