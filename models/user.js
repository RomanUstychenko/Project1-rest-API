const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const userShema = new Schema (
    {
      name: {
        type: String,
        required: [true, 'name is required'],
      },    
        email: {
          type: String,
          required: [true, 'Email is required'],
          metch: emailRegex,
          unique: true,
        },
        password: {
          type: String,
          required: [true, 'Set password for user'],
          minlenght: 6,
        },
        description: {
          type: String,
        },
        phone: {
          type: String,
        },
        address: {
          type: String,
        },
        logoURL: {
          type: String,
          required: true,
        },
        token: {
          type: String,
        },
        verify: {
          type: Boolean,
          default: false,
        },
        verificationToken: {
          type: String,
          required: [true, 'Verify token is required'],
        }
      },
    // { versionKey: false }
);

userShema.post("save", handleMongooseError);

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(6).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
});
// const updateShchema = Joi.object({
//   name: Joi.string(),
//   logoURL: Joi.string(),
// });

const schemas = {
    registerSchema,
    loginSchema,
    emailSchema
};

const User = model("user", userShema);

module.exports = {
    schemas,
    User,
}