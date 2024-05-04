const {Section} = require("../../models/sections")

const listSection = async (req, res, next) => {
  const {_id: owner} = req.user;
  // const {page = 1, limit = 10} = req.query;
  // const skip = (page - 1) * limit;
  const result = await Section.find({owner}, ""
  // , {skip, limit  }
  ).populate("owner")
 
  // Сортування за полем "category" в алфавітному порядку
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

  console.log("res", result)

  res.json(result);
};

module.exports = listSection;
