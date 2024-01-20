const { HttpError } = require('../../helpers');
const { User } = require("../../models/user");

const getAllUser = async (req, res) => {
   
      const users = await User.find();
      console.log(users)
      if (!users) {
        throw HttpError(401, "No users")
            };

      const result = users.map(({_id, name, logoURL, phone, address, description}) => ({_id, name, logoURL, phone, address, description}));
    
    res.json(
        result,
    );
  };
  
  module.exports = getAllUser;