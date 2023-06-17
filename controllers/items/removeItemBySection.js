const {Item} = require("../../models/item")
const {HttpError, buildQuery} = require("../../helpers");

const removeItemBySection = async (req, res) => {
  const {_id: owner} = req.user;
  console.log(owner)
  console.log("req", req)
    const { category } = req.params;
//   const { section } = req.params;
// console.log("категорі", category)
//   // Pagination--------------
  const { page = 1, limit = 8} = req.query;
  const skip = (page - 1) * limit;
//   const total = await Notice.count(buildQuery(req, { adopStatus: category }));
//   const totalPages = Math.ceil(total / limit);
//   // ------------------------

  const result = await Item.remove( buildQuery(req, { 
    section: category,
  owner: owner
 })).populate("owner", "email")
  
  
  if (result.length === 0) {
    
    throw HttpError(404, `No items in "${category}" section`);
  }   
    
  res.json(result);
};

module.exports = removeItemBySection;