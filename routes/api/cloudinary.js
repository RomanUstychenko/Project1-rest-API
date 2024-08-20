const express = require("express");
const router = express.Router();

const { validate, isValidId, authenticate } = require("../../middlewares");
const {deleteImage, deleteImagesSection} = require("../../services/cloudinary/cloudinary");



router.delete('/deleteImage', authenticate, deleteImage)
router.delete('/deleteImages', authenticate, deleteImagesSection)


module.exports = router;
