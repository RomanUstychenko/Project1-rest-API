const express = require("express");
const router = express.Router();

const { validate, isValidId, authenticate } = require("../../middlewares");
const {deleteImage} = require("../../services/cloudinary/cloudinary");



router.delete('/deleteImage', authenticate, deleteImage)



module.exports = router;
