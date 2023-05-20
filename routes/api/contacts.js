const express = require("express");
const router = express.Router();
const contactsController = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", authenticate, contactsController.listContacts);

router.get("/:contactId", authenticate, isValidId, contactsController.getContactById);

router.post("/", authenticate, validateBody(schemas.addSchema), contactsController.addContact);

router.delete("/:contactId", authenticate, isValidId, contactsController.removeContact);

router.put("/:contactId", authenticate, isValidId, validateBody(schemas.updateSchema),contactsController.updateContact);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateStatusContact
);

module.exports = router;
