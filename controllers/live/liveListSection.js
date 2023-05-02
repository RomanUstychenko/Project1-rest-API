const {LiveSection} = require("../../models/live")


const liveListSection = async (req, res, next) => {
  const {_id} = req.user;
  // const {page = 1, limit = 10} = req.query;
  // const skip = (page - 1) * limit;
  const result = await LiveSection.find({_id}, ""
  // , {skip, limit  }
  ).populate("owner")
  res.json(result);
};

module.exports = liveListSection;
