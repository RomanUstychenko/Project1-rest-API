const {Item} = require("../../models/item")
const {HttpError, buildQuery} = require("../../helpers");

const getItemBySection = async (req, res) => {
  const {_id: owner} = req.user;
  // console.log(owner)
    const { category } = req.params;
//   const { section } = req.params;
// console.log("категорі", category)
//   // Pagination--------------
  const { page = 1, limit = 8} = req.query;
  const skip = (page - 1) * limit;
//   const total = await Notice.count(buildQuery(req, { adopStatus: category }));
//   const totalPages = Math.ceil(total / limit);
//   // ------------------------

  const result = await Item.find( buildQuery(req, { 
    section: category,
  owner: owner
 })).populate("owner", "email")
  // const result = await Item.find({owner}, "", {skip, limit}).populate("owner", "email")
    // .populate("owner", "email phone")
    // .sort({ createdAt: -1 })

  
    // .limit(limit)
    // .skip(skip);
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
  if (result.length === 0) {
    
    throw HttpError(404, `No items in "${category}" section`);
  }   
    // console.log(result)
 // Сортування за полем "idSort"
//  result.sort((a, b) => {
//   // Перетворюємо "idSort" в числове значення перед порівнянням
//   const idSortA = parseInt(a.idSort);
//   const idSortB = parseInt(b.idSort);

//   if (idSortA < idSortB) return -1;
//   if (idSortA > idSortB) return 1;
//   // return 0;
// });

  res.json(result);
};

module.exports = getItemBySection;