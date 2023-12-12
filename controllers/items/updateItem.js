const {Item} = require("../../models/item")
const {HttpError} = require("../../helpers");
const  {uploadImgToCloudinary}  = require("../../services/cloudinary/");


const updateItem = async (req, res, next) => {
  const { id } = req.params;

  if (!req.file) {
  const result = await Item.findByIdAndUpdate( id , { ...req.body}, {new: true});
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  console.log("result", result)
  res.json(result);
return
}
const itemImg = await uploadImgToCloudinary(req, 250, 250)
  const result = await Item.findByIdAndUpdate( id , { ...req.body, itemImg}, {new: true});
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  console.log("result", result)
  res.json(result);
};
module.exports = updateItem;
