const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config()


const bodyParser = require('body-parser');

const authRouter = require("./routes/api/users")
const itemsRouter = require("./routes/api/items");
const sectionsRouter = require("./routes/api/sections");
const cloudinaryRouter = require("./routes/api/cloudinary");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";


////////////////

const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

dotenv.config();


// Configuration 
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
});

const router = express.Router();

app.use(express.json());

router.delete('/deleteImage', (req, res) => {
  const publicId = req.body.public_id; // public_id зображення, яке треба видалити
  console.log("publicId", publicId)
  cloudinary.uploader.destroy(publicId, (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to delete image' });
    }
    return res.status(200).json({ message: 'Image deleted successfully' });
  });
});

app.use('/project1', router)

///////////////


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
app.use("/api/cloudinary", cloudinaryRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: err.message });
});








module.exports = app;
