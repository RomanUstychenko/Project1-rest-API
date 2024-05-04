const {Section} = require("../../models/sections")
const {HttpError} = require("../../helpers");

const updateSection = async (req, res, next) => {
  const { id } = req.params;
  const { ...updatedData } = req.body;

  // const result = await Section.findByIdAndUpdate(id, req.body, {new: true});
  // if (!result) {
  //   throw HttpError(404, "Not Found");
  // }
  // res.json(result);

  if (!req.file) {
  const result = await Section.findByIdAndUpdate(id, { ...updatedData}, {new: true});
  // console.log("res", result)
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
  return;
}


};
module.exports = updateSection;
