const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const { uploadImgToCloudinary } = require("../../services/cloudinary/");

const updateUser = async (req, res) => {
  const { _id: userId } = req.user;
  if (!req.file) {
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      { ...req.body },
      { new: true }
    );
    if (!user) {
      throw HttpError(404);
    }

    res.status(200).json(user);
    return;
  }

  const { imageURL, publicId } = await uploadImgToCloudinary(req, 250, 250);

  const user = await User.findByIdAndUpdate(
    { _id: userId },
    { ...req.body, logoURL: imageURL, logoURLId: publicId },
    { new: true }
  );
  if (!user) {
    throw HttpError(404);
  }

  res.status(200).json(user);
};

module.exports = updateUser;
