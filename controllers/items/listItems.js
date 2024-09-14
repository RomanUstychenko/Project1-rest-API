const { Item } = require("../../models/item");

const listItems = async (req, res, next) => {
  const { _id: owner } = req.user;
  // const {page = 1, limit = 10} = req.query;
  // const skip = (page - 1) * limit;
  // const result = await Item.find({owner}, "", {skip, limit}).populate("owner", "email")
  const result = await Item.find({ owner }, "").populate("owner", "email");
  result.sort((a, b) => {
    const idSortA = parseInt(a.idSort);
    const idSortB = parseInt(b.idSort);

    if (idSortA < idSortB) return -1;
    if (idSortA > idSortB) return 1;
    //   return 0;

    return 0;
  });

  res.json(result);
};

module.exports = listItems;
