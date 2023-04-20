const {Item} = require("../../models/item")
const {HttpError} = require("../../helpers");

const getItemById = async (req, res) => {
  const { id } = req.params;
  const result = await Item.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getItemById;
