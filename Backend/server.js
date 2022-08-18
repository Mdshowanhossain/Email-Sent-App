const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const Email = require("./Routers/EmailSent");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser());

app.get("/", (req, res) => {
  res.status(200).send({ success: true, message: "Your Email Sent App " });
});

app.use("/user", Email);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8000, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
