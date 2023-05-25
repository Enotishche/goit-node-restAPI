const nodemailer = require("nodemailer");
require("dotenv").config();
const { SMTP_MAIL, SMTP_PSWR } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 2525,
  secure: true,
  auth: {
    user: SMTP_MAIL,
    pass: SMTP_PSWR,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: `${SMTP_MAIL}` };
  await transport
    .sendMail(email)
    .then(() => {
      console.log(`${email} send success`);
    })
    .catch((error) => console.log(error.message));
  return true;
};

module.exports = sendEmail;
