const {Section} = require("../../models/sections")

const listSection = async (req, res, next) => {
  const {_id: owner} = req.user;
  // const {page = 1, limit = 10} = req.query;
  // const skip = (page - 1) * limit;
  const result = await Section.find({owner}, ""
  // , {skip, limit  }
  ).populate("owner")
  res.json(result);
};

module.exports = listSection;
