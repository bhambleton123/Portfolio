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
          password: hash,
        });
        res.send({ success: newUser });
      } catch (err) {
        res.status(500).send(err);
      }
    }
  });
};

module.exports = { createUser };
