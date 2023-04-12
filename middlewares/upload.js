const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "tmp");

const mulerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    console.log("tmpdir or name", file.originalname);
  },
});

const upload = multer({
  storage: mulerConfig,
});

module.exports = upload;
