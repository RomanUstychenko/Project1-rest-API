const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validate, isValidId, authenticate } = require("../../middlewares");
const {schemas} = require("../../models/contact");

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));

router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", authenticate, validate(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.put("/:id", authenticate, isValidId, validate(schemas.addSchema), ctrlWrapper(ctrl.updateContact));

router.patch("/:id/favorite", authenticate, isValidId, validate(schemas.updateFavoriteScheme), ctrlWrapper(ctrl.updateFavorite));

router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeContact));

module.exports = router;
