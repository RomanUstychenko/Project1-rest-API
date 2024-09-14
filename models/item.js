const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  weight: {
    type: String,
    required: false,
  },
  itemImg: {
    type: String,
  },
  itemImgId: {
    type: String,
  },
  section: {
    type: String,
  },
  idSort: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

itemSchema.post("save", handleMongooseError);

const Item = model("item", itemSchema);

const addSchema = Joi.object({
  itemName: Joi.string().required(),
  email: Joi.string(),
  description: Joi.string(),
  price: Joi.number().required(),
  weight: Joi.string(),
  itemImg: Joi.string(),
  itemImgId: Joi.string(),
  section: Joi.string(),
  idSort: Joi.string().required(),
});

const updSchema = Joi.object({
  itemName: Joi.string(),
  email: Joi.string(),
  description: Joi.string().empty("").default("default value"),
  price: Joi.number(),
  weight: Joi.string().empty("").default("default value"),
  itemImg: Joi.string().empty("").default("default value"),
  itemImgId: Joi.string().empty("").default("default value"),
  section: Joi.string(),
  idSort: Joi.string(),
});

const schemas = {
  addSchema,
  updSchema,
};

module.exports = {
  Item,
  schemas,
};
