const { Item } = require("../../models/item");

const addItem = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Item.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = addItem;
