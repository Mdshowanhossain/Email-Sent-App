const express = require("express");

const { SendEmail } = require("../Controllers/EmailSendController");

const Email = express.Router();

Email.post("/emai_send", SendEmail);

// user: "amesowhan76@gmail.com",
// pass: "lmlvkpfsdpwlwrbh",
module.exports = Email;
