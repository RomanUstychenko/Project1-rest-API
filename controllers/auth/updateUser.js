const { HttpError } = require('../../helpers');
const { User } = require("../../models/user");

const updateUser = async (req, res) => {
    const { _id: userId } = req.user;
  
        const user = await User.findByIdAndUpdate({ _id: userId }, { ...req.body }, { new: true });
        if (!user) {
            throw HttpError(404)
        }
        const { name, email } = user;
        
        res.status(200).json({
            user: {
                name,
                email, 
            }
        })        
         
}

module.exports = updateUser;