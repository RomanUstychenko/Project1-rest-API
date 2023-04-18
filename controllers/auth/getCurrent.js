const getCurrent = (req, res) => {
  const { 
    email, 
    name, 
    avatarURL, 
    verify } = req.user;
  res.json({
    email,
    name, 
    avatarURL,
    verify,
  });
};

module.exports = getCurrent;
