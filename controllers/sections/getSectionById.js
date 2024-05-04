const {Section} = require("../../models/sections")
const {HttpError} = require("../../helpers");

const getSectionById = async (req, res) => {
  const { id } = req.params;
  const result = await Section.findById(id)
 
  
  ;
  // console.log(result)
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getSectionById;
