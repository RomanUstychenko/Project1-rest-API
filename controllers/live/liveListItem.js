const {LiveItem} = require("../../models/live")


const liveListItem = async (req, res, next) => {
    const {_id} = req.user;
    // const {page = 1, limit = 10} = req.query;
    // const skip = (page - 1) * limit;
    const result = await LiveItem.find({_id}, ""
    // , {skip, limit  }
    ).populate("owner")
    res.json(result);
  };
  
  module.exports = liveListItem;
  