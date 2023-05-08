const getCurrent = (req, res) => {
  const {
    _id, 
    email, 
    name, 
    avatarURL, 
    verify } = req.user;
  res.json({
    _id,
    email,
    name, 
    avatarURL,
    verify,
  });
};

module.exports = getCurrent;
