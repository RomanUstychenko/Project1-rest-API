const {Section} = require("../../models/sections")
const {HttpError} = require("../../helpers");

const getSectionsByName = async (req, res) => {
  const {owner} = req.params;
  // const { owner} = req.user;
  // console.log("req", name)
  // console.log("req.user", req.user)
  const result = await Section.find({owner});
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};


module.exports = getSectionsByName;
