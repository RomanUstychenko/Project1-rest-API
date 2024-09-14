const { Item } = require("../../models/item");
const { HttpError } = require("../../helpers");
const { uploadImgToCloudinary } = require("../../services/cloudinary/");

const updateItem = async (req, res, next) => {
  const { id } = req.params;
  if (!req.file) {
    const result = await Item.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!result) {
      throw HttpError(404, "Not Found");
    }
    res.json(result);
    return;
  }

  const { imageURL, publicId } = await uploadImgToCloudinary(req, 500, 500);

  const result = await Item.findByIdAndUpdate(
    id,

    { ...req.body, itemImg: imageURL, itemImgId: publicId },

    { new: true }
  );
  if (!result) {
    throw HttpError(404, "Not Found");
  }

  res.json(result);
};
module.exports = updateItem;
