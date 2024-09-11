const { User } = require("../../models/user");
const { HttpError, sendEmail } = require("../../helpers");
const bcryptjs = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { BASE_URL } = process.env;
const { NODEMAILER_USER } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
console.log("email", email)
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
 
  const hashPassword = await bcryptjs.hash(password, 10);
  const logoURL = gravatar.url(email);
  const verificationToken = nanoid();
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    logoURL,
    verificationToken,
  });
  const verifyEmail = {
    from: `"QR Menu 👻" <${NODEMAILER_USER}>`,
    to: email,
    subject: "Verify your email",
    html: `
    <p>Thank You for registration</p>
    <p>please<p>
    <a 
    target="_blank"
    href="${BASE_URL}/api/users/verify/${verificationToken}"
    >
    <p>Click for verify your email</p>
    </a>
    `,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    logoURL: newUser.logoURL,
    verify: newUser.verify,
  });

};

module.exports = register;
