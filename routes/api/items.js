const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/items");
const { ctrlWrapper } = require("../../helpers");
const { validate, isValidId, authenticate } = require("../../middlewares");
const {schemas} = require("../../models/item");

router.get("/", authenticate, ctrlWrapper(ctrl.listItems));
router.get("/:category", ctrlWrapper(ctrl.getItemBySection));

router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getItemById));

router.post("/", authenticate, validate(schemas.addSchema), ctrlWrapper(ctrl.addItem));

router.put("/:id", authenticate, isValidId, validate(schemas.addSchema), ctrlWrapper(ctrl.updateItem));

router.patch("/:id/favorite", authenticate, isValidId, validate(schemas.updateFavoriteScheme), ctrlWrapper(ctrl.updateFavorite));

router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeItem));

module.exports = router;
