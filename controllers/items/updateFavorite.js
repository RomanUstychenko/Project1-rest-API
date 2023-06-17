// const {Item} = require("../../models/item");
// const { HttpError } = require("../../helpers");

// const updateFavorite = async (req, res, next) => {
//   const { id } = req.params;

//   if (!req.body) {
//     throw HttpError(400, "missing field favorite");
//   }
//   const result = await Item.findByIdAndUpdate(id, req.body, { new: true });
//   if (!result) {
//     throw HttpError(404, "Not Found");
//   }
//   res.json(result);
// };

// module.exports = updateFavorite;
