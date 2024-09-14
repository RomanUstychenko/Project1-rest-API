const { Section } = require("../../models/sections");
const { HttpError } = require("../../helpers");

const getSectionsByName = async (req, res) => {
  const { owner } = req.params;

  const result = await Section.find({ owner });

  result.sort((a, b) => {
    if (a.menuOptions === b.menuOptions) {
      const idSortA = parseInt(a.idSort);
      const idSortB = parseInt(b.idSort);
      return idSortA - idSortB;
    }

    return a.menuOptions === "kitchen" ? -1 : 1;
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getSectionsByName;
