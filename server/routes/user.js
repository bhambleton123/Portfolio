const router = require("express").Router();
const userController = require("../controllers/user");
const passport = require("../auth/passport");

// Register user
router.post("/user", userController.createUser);

// login user
router.post("/login", passport.authenticate("local"), userController.loginUser);

// Get current user
router.get("/user", userController.getCurrentUser);

// Log out user
router.get("/logout", userController.logoutUser);

module.exports = router;
