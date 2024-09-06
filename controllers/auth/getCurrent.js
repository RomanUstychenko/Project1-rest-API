const getCurrent = (req, res) => {
  const {
    _id, 
    email, 
    name,
    phone,
    address,
    description,
    logoURL, 
    logoURLId,
    verify } = req.user;
  res.json({
    _id,
    email,
    name,
    phone,
    address,
    description, 
    logoURL,
    logoURLId,
    verify,
  });
};

module.exports = getCurrent;
