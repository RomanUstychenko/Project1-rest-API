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
   
    if (a.menuOptions === b.menuOptions) {
      const idSortA = parseInt(a.idSort);
    const idSortB = parseInt(b.idSort);
    return idSortA - idSortB;
  }
    // if (idSortA < idSortB) return -1;
    // if (idSortA > idSortB) return 1;
  //   return 0;

  return a.menuOptions === 'kitchen' ? -1 : 1
  });

  console.log("res", result)

  res.json(result);
};

module.exports = listSection;
