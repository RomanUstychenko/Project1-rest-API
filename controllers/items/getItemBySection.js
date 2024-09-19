const { Item } = require("../../models/item");
const { HttpError, buildQuery } = require("../../helpers");

const getItemBySection = async (req, res) => {
  const { _id: owner } = req.user;
  const { category } = req.params;

  const result = await Item.find(
    buildQuery(req, {
      section: category,
      owner: owner,
    })
  ).populate("owner", "email");

  if (result.length === 0) {
    throw HttpError(404, `No items in "${category}" section`);
  }

  result.sort((a, b) => {
    const idSortA = parseInt(a.idSort, 10);
    const idSortB = parseInt(b.idSort, 10);

    if (idSortA < idSortB) return -1;
    if (idSortA > idSortB) return 1;

    return 0;
  });

 

  res.json(result);
};

module.exports = getItemBySection;
