const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/live");
const { ctrlWrapper } = require("../../helpers");
const { validate, isValidId, } = require("../../middlewares");


router.get("/live/", ctrlWrapper(ctrl.liveListSection));

router.get("/live/:id", isValidId, ctrlWrapper(ctrl.getSectionById));




module.exports = router;