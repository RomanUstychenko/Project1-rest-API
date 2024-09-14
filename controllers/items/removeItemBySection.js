const { Item } = require("../../models/item");
const { HttpError, buildQuery } = require("../../helpers");

const removeItemBySection = async (req, res) => {
  const { _id: owner } = req.user;

  const { category } = req.params;

  const result = await Item.remove(
    buildQuery(req, {
      section: category,
      owner: owner,
    })
  ).populate("owner", "email");

  if (result.length === 0) {
    throw HttpError(404, `No items in "${category}" section`);
  }

  res.json(result);
};

module.exports = removeItemBySection;
