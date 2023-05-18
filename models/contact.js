const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    phone: {
      type: String, 
      match: [/[0-9]{3}-[0-9]{3}-[0-9]{4}/, "Set phone on format: xxx-xxx-xxxx"],
      required: true,
    },
    email: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().pattern(/[0-9]{3}-[0-9]{3}-[0-9]{4}/).required(),
  email: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
};

contactSchema.post("save", handleMongooseError);
const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};