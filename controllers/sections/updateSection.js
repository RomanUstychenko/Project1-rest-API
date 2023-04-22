const {Section} = require("../../models/sections")
const {HttpError} = require("../../helpers");

const updateSection = async (req, res, next) => {
  const { id } = req.params;
  const result = await Section.findByIdAndUpdate(id, req.body, {new: true});
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};
module.exports = updateSection;
