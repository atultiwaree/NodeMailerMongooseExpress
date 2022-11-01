const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "attiws@gmail.com",
    pass: "hsczvllrhrwrezcl",
  },
  secure: true,
});

const sendMail = (to, id) => {
  const mailData = {
    to: to,
    subject: "Verify your account",
    html: `
        <h1>Click link below</h1>
        <a href="http://localhost:3001/verify/${id}">click to verify</a>
      `,
  };
  transporter.sendMail(mailData);
};

module.exports = sendMail;
