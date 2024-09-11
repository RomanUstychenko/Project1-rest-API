const { User } = require("../../models/user");
const { HttpError, sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;
const { NODEMAILER_USER } = process.env;

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.verify) {
    throw HttpError(404);
  }

  const verifyEmail = {
    from: `"QR Menu 👻" <${NODEMAILER_USER}>`,
    to: user.email,
    subject: "Verify your email",
    html: `
    <p>Thank You for registration</p>
    <p>please<p>
    <a 
    target="_blank"
    href="${BASE_URL}/api/users/verify/${user.verificationToken}"
    >
    <p>Click for verify your email</p>
    </a>
    `,
  };
  await sendEmail(verifyEmail);

  res.json({
    message: "Verify email resend",
  });
};

module.exports = resendVerify;
