const nodemailer = require('nodemailer');

const sendEmail = async (data) => {

const transporter = nodemailer.createTransport({
  host: 'smtp.ukr.net',
  port: 465,
  secure: true,
  auth: {
    user: 'anarhist_666@ukr.net',
    pass: 'AxnNOVoOb1CBMKKt'
  }
});

transporter.sendMail(data, (error, info) => {
  if (error) {
    console.error("error", error);
    res.status(500).json({ error: 'Помилка відправлення листа підтвердження' });
  } else {
    console.log('Email sent: ' + info.response);
    res.json({ success: true, message: 'Лист підтвердження надіслано' });
  }
});

};

module.exports = sendEmail;