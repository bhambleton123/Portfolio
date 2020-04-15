require("dotenv").config();
const nodemailer = require("nodemailer");

const mailToBrian = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAILER_USERNAME,
    to: "bhambl3t0n1@gmail.com",
    subject: req.body.subject,
    html: req.body.html,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(info);
    }
  });
};

module.exports = { mailToBrian };
