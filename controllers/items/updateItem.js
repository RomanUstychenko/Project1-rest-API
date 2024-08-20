const {Item} = require("../../models/item")
const {HttpError} = require("../../helpers");
const  {uploadImgToCloudinary}  = require("../../services/cloudinary/");


const updateItem = async (req, res, next) => {
  const { id } = req.params;
// console.log(req.body)
  if (!req.file) {
  const result = await Item.findByIdAndUpdate( id , { ...req.body}, {new: true});
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  // console.log("result", result)
  res.json(result);
return
}



const { imageURL, publicId } = await uploadImgToCloudinary(req, 500, 500)
// const itemImg = await uploadImgToCloudinary(req, 500, 500)
  const result = await Item.findByIdAndUpdate( 
    id,
    // { ...req.body, itemImg: { url: imageURL, publicId }}, 
    { ...req.body, itemImg: imageURL, itemImgId: publicId}, 
    // { ...req.body, itemImg}, 
    {new: true});
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  // console.log("result", result)
  res.json(result);
};
module.exports = updateItem;
