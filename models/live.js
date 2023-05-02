const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const liveSectionSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    _id: {
      type: String,
      required: true,
    }
  },
  { versionKey: false }
);

liveSectionSchema.post("save", handleMongooseError);

const LiveSection = model("LiveSection", liveSectionSchema);

const liveItemSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
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
   
    _id: {
      type: String,
      required: true,
    }
  },
  { versionKey: false }
);

liveItemSchema.post("save", handleMongooseError);

const LiveItem = model("LiveItem", liveItemSchema);





module.exports = {
  LiveSection,
  LiveItem
};