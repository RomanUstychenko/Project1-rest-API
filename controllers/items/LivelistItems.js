const {Item} = require("../../models/item")

const LivelistItems = async (req, res, next) => {
  // const {_id: owner} = req.user;
  const {owner} = req.params;
  // const {page = 1, limit = 10} = req.query;
  // const skip = (page - 1) * limit;
  const result = await Item.find({owner}, "", ).populate("owner", "email")
  res.json(result);
};

module.exports = LivelistItems;
