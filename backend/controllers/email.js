const nodemailer = require("nodemailer");
const emailRouter = require("express").Router();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "planproperty07@gmail.com",
    pass: "1994plan?-antalya",
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});

emailRouter.post("/", (request, response) => {
  const name = request.body.name;
  const about = request.body.about;
  const email = request.body.email;

  const newEmail = {
    from: "planproperty07@gmail.com",
    to: "planproperty07@gmail.com",
    subject: "Yeni Mesaj!",
    html: `<div> <h2> Sitedeki iletişim bölümünden yeni bir mesaj geldi </h2> <p> ${name} ismindeki ve ${email} mailine sahip kişi yazdı: <p/> ${about}  </div>`,
  };
  transporter.sendMail(newEmail, (err) => {
    if (err) {
      response.json({
        status: "fail",
      });
    } else {
      response.json({
        status: "success",
      });
    }
  });
});

module.exports = emailRouter;
