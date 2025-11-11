const nodemailer =require('nodemailer');


exports.sendEmail = async(msg) => {

    let transporter = nodemailer.createTransport({
       service: 'gmail',
        port: 587,
        secure: false, 
        auth: {
             user: "arthkoradiya@gmail.com",
             pass: "umvmqslxtoupqjjd",

        },
    })

    const info = await transporter.sendMail(msg)
    console.log("Message sent:", info.messageId);
    return info;
}