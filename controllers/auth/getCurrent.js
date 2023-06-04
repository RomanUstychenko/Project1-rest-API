const getCurrent = (req, res) => {
  const {
    _id, 
    email, 
    name, 
    logoURL, 
    verify } = req.user;
  res.json({
    _id,
    email,
    name, 
    logoURL,
    verify,
  });
};

module.exports = getCurrent;
