const getCurrent = (req, res) => {
  const {
    _id, 
    email, 
    name,
    phone,
    address,
    description,
    logoURL, 
    verify } = req.user;
  res.json({
    _id,
    email,
    name,
    phone,
    address,
    description, 
    logoURL,
    verify,
  });
};

module.exports = getCurrent;
