const getCurrent = (req, res) => {
  const { email, name, verify } = req.user;
  res.json({
    email,
    name, verify,
  });
};

module.exports = getCurrent;
