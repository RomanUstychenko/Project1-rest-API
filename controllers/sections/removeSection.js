const { Section } = require("../../models/sections");
const { HttpError } = require("../../helpers");

const removeSection = async (req, res) => {
  const { id } = req.params;
  const result = await Section.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json({ message: "Section deleted" });
};

module.exports = removeSection;
