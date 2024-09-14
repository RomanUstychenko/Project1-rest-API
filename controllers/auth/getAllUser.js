const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const getAllUser = async (req, res) => {
  const users = await User.find();
  if (!users) {
    throw HttpError(401, "No users");
  }

  const result = users.map(
    ({ _id, name, logoURL, logoURLId, phone, address, description }) => ({
      _id,
      name,
      logoURL,
      logoURLId,
      phone,
      address,
      description,
    })
  );

  res.json(result);
};

module.exports = getAllUser;
