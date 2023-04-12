const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth")
const { ctrlWrapper } = require("../../helpers");
const { validate, authenticate, upload } = require("../../middlewares");
const {schemas} = require("../../models/user");

router.post("/register", validate(schemas.registerSchema), ctrlWrapper(ctrl.register))
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify))
router.post("/verify", validate(schemas.emailSchema), ctrlWrapper(ctrl.resendVerify))

router.post("/login", validate(schemas.loginSchema), ctrlWrapper(ctrl.login))
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent))

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout))

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))


module.exports = router;