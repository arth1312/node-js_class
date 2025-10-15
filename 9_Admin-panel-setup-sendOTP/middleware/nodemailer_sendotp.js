


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: "arthkoradiya@gmail.com",
    pass: "umgqmaeyrbnzdcow",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async (data) => {
  try {
    let info = await transporter.sendMail(data);
    console.log("Email sent: ", info.response);
    return info;
  } catch (err) {
    console.error("Error sending mail:", err);
    throw err;
  }
};

module.exports = sendMail;

