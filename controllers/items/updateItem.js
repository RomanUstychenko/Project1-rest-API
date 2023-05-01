const {Item} = require("../../models/item")
const {HttpError} = require("../../helpers");

const updateItem = async (req, res, next) => {
  const { id } = req.params;
  const result = await Item.findByIdAndUpdate( id , { ...req.body }, {new: true});
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  console.log("result", result)
  res.json(result);
};
module.exports = updateItem;
