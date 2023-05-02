const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/sections");
const { ctrlWrapper } = require("../../helpers");
const { validate, isValidId, authenticate } = require("../../middlewares");
const {schemas} = require("../../models/sections");

// router.get("/", authenticate, ctrlWrapper(ctrl.listSection));

// router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getSectionById));

router.get("/:owner",  ctrlWrapper(ctrl.getSectionsByName));

// router.post("/", authenticate, validate(schemas.addSectionSchema), ctrlWrapper(ctrl.addSection));

// router.put("/:id", authenticate, isValidId, validate(schemas.addSectionSchema), ctrlWrapper(ctrl.updateSection));


// router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeSection));

module.exports = router;