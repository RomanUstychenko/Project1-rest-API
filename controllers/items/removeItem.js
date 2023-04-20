const {Item} = require("../../models/item");
const { HttpError } = require("../../helpers");

const removeItem = async (req, res) => {
  const { id } = req.params;
  const result = await Item.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json({ message: "Item deleted" });
};

module.exports = removeItem;
