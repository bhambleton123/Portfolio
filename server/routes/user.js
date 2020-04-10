const router = require("express").Router();
const userController = require("../controllers/user");
const passport = require("../auth/passport");

// Register user

router.post("/user", userController.createUser);

// login user
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.end();
});

router.get("/user", userController.getUserByEmailTest);

module.exports = router;
