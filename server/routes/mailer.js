const router = require("express").Router();
const mailerController = require("../controllers/mailer");

router.post("/mail", mailerController.mailToBrian);

module.exports = router;
