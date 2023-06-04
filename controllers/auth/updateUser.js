const { HttpError } = require('../../helpers');
const { User } = require("../../models/user");
const  {uploadImgToCloudinary}  = require("../../services/cloudinary/");

const updateUser = async (req, res) => {
    const { _id: userId } = req.user;
    if (!req.file) {
        const user = await User.findByIdAndUpdate({ _id: userId }, { ...req.body }, { new: true });
        if (!user) {
            throw HttpError(404)
        }
        const { name, email, verify } = user;
        
        res.status(200).json({
            user: {
                name,
                email,
                verify,
            
            }
        })  
        return      
    }

    const logoURL = await uploadImgToCloudinary(req, 150, 150)    
    // console.log("avatar", avatarURL)
    const user= await User.findByIdAndUpdate({ _id: userId }, { ...req.body, logoURL }, { new: true });
    if (!user) {
        throw HttpError(404)
    }
    const { name, email, verify } = user;

    res.status(200).json({
        user: {
            name,
            email,
            verify, 
            logoURL
        }
    })    
}

module.exports = updateUser;