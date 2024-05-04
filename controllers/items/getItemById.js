const {Item} = require("../../models/item")
const {HttpError} = require("../../helpers");

const getItemById = async (req, res) => {
  const { id } = req.params;
  const result = await Item.findById(id);
  result.sort((a, b) => {
    // if (a.category < b.category) return -1;
    // if (a.category > b.category) return 1;

      const idSortA = parseInt(a.idSort);
    const idSortB = parseInt(b.idSort);
  
    if (idSortA < idSortB) return -1;
    if (idSortA > idSortB) return 1;
  //   return 0;

    return 0;
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getItemById;
