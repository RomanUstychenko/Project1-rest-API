const {Section} = require("../../models/sections")

const addSection = async (req, res) => {
  const {_id: owner} = req.user;
  const result = await Section.create({...req.body, owner})
  res.status(201).json(result);
};

module.exports = addSection;
