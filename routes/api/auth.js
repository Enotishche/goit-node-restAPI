const express = require("express");

const contactsController = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), contactsController.register);

router.post("/login", validateBody(schemas.loginSchema), contactsController.login);

router.get("/current", authenticate, contactsController.getCurrent);

router.post("/logout", authenticate, contactsController.logout);

router.patch("/avatars", authenticate, upload.single("avatar"),contactsController.updateAvatar);
  
module.exports = router;
