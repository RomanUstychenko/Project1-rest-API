const { Section } = require("../../models/sections");
const { HttpError } = require("../../helpers");

const updateSection = async (req, res, next) => {
  const { id } = req.params;
  const { ...updatedData } = req.body;

  if (!req.file) {
    const result = await Section.findByIdAndUpdate(
      id,
      { ...updatedData },
      { new: true }
    );

    if (!result) {
      throw HttpError(404, "Not Found");
    }
    res.json(result);
    return;
  }
};
module.exports = updateSection;
