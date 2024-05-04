const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const sectionSchema = new Schema(
  {
    idSort: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    }
  },
  // { versionKey: false }
);

sectionSchema.post("save", handleMongooseError);

const Section = model("section", sectionSchema);


const addSectionSchema = Joi.object({
  idSort: Joi.string().required(),
    category: Joi.string().required(),
});



const schemas = {
    addSectionSchema,
}

module.exports = {
    Section,
  schemas
};