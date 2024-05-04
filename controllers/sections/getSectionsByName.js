const {Section} = require("../../models/sections")
const {HttpError} = require("../../helpers");

const getSectionsByName = async (req, res) => {
  const {owner} = req.params;
  // const { owner} = req.user;
  // console.log("req", name)
  // console.log("req.user", req.user)
  const result = await Section.find({owner})
  
  // .limit(limit)
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
  // console.log(result)
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};


module.exports = getSectionsByName;
