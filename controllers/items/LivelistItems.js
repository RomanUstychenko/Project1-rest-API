const { Item } = require("../../models/item");

const LivelistItems = async (req, res, next) => {
  const { owner } = req.params;
  const result = await Item.find({ owner }, "").populate("owner", "email");
  result.sort((a, b) => {
    const idSortA = parseInt(a.idSort);
    const idSortB = parseInt(b.idSort);

    if (idSortA < idSortB) return -1;
    if (idSortA > idSortB) return 1;

    return 0;
  });
  res.json(result);
};

module.exports = LivelistItems;
