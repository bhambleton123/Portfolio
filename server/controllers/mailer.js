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

  const createContent = (name, email, message, company) => {
    return {
      title: company
        ? `${name} from ${company} sent you a message`
        : `${name} sent you a message`,
      html: `<p>${message}</p>
        <br/>
        <p>Email: ${email}</p>`,
    };
  };

  const content = createContent(
    req.body.name,
    req.body.email,
    req.body.message,
    req.body.company
  );

  const mailOptions = {
    from: process.env.MAILER_USERNAME,
    to: "bhambl3t0n1@gmail.com",
    subject: content.title,
    html: content.html,
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
