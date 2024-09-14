const { Section } = require("../../models/sections");

const listSection = async (req, res, next) => {
  const { _id: owner } = req.user;

  const result = await Section.find({ owner }, "").populate("owner");

  result.sort((a, b) => {
    if (a.menuOptions === b.menuOptions) {
      const idSortA = parseInt(a.idSort);
      const idSortB = parseInt(b.idSort);
      return idSortA - idSortB;
    }

    return a.menuOptions === "kitchen" ? -1 : 1;
  });

  res.json(result);
};

module.exports = listSection;
