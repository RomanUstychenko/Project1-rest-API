const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const itemSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    itemImg: {
      type: String,
    },
    section: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    }
  },
  { versionKey: false }
);

itemSchema.post("save", handleMongooseError);

const Item = model("item", itemSchema);

const addSchema = Joi.object({
  itemName: Joi.string().required(),
  email: Joi.string()
  // .required()
  ,
  description: Joi.string(),
  price: Joi.string().required(),
  itemImg: Joi.string(),
  section: Joi.string(),
  favorite: Joi.boolean(),
});

const updSchema = Joi.object({
  itemName: Joi.string(),
  email: Joi.string(),
  description: Joi.string(),
  price: Joi.string(),
  itemImg: Joi.string(),
  section: Joi.string(),
  favorite: Joi.boolean(),
});

const updateFavoriteScheme = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updSchema,
  updateFavoriteScheme
}

module.exports = {
  Item,
  schemas
};
