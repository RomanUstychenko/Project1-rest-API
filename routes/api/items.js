const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/items");
const { ctrlWrapper } = require("../../helpers");
const {
  validate,
  isValidId,
  authenticate,
  upload,
} = require("../../middlewares");
const { schemas } = require("../../models/item");

router.get("/live/:owner", ctrlWrapper(ctrl.LivelistItems));
router.get("/live/:owner/:category", ctrlWrapper(ctrl.getItemBySection));
router.get("/", authenticate, ctrlWrapper(ctrl.listItems));

router.get("/:category", authenticate, ctrlWrapper(ctrl.getItemBySection));

router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getItemById));

router.post(
  "/",
  authenticate,
  validate(schemas.addSchema),
  ctrlWrapper(ctrl.addItem)
);

router.patch(
  "/:id",
  authenticate,
  upload.single("imageURL"),
  isValidId,
  validate(schemas.updSchema),
  ctrlWrapper(ctrl.updateItem)
);

router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeItem));
router.delete(
  "/:category/remove",
  authenticate,
  ctrlWrapper(ctrl.removeItemBySection)
);

module.exports = router;
