const router = require("express").Router();
const userController = require("../controllers/user");

// Register user

router.post("/user", userController.createUser);

module.exports = router;
