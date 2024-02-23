const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config()


const bodyParser = require('body-parser');

const authRouter = require("./routes/api/users")
const itemsRouter = require("./routes/api/items");
const sectionsRouter = require("./routes/api/sections");


const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";


// send Email nodemailer /////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
///////

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"))

app.use("/api/users", authRouter);
app.use("/api/items", itemsRouter);
app.use("/api/sections", sectionsRouter);


app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: err.message });
});








module.exports = app;
