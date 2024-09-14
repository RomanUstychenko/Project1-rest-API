const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const getAllUser = require("./getAllUser");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerify = require("./resendVerify");
const updateUser = require("./updateUser");

module.exports = {
  register,
  login,
  getCurrent,
  getAllUser,
  logout,
  updateAvatar,
  verify,
  resendVerify,
  updateUser,
};
