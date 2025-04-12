let node_mailer = require('nodemailer');
require("dotenv").config()

let Email_Info = node_mailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

let Email_Body = {
    to: ['saqibkawishaptech@gmail.com', 'ma7506363@gmail.com', 'zain.1235890a@gmail.com', 'hunainhassan247@gmail.com' ],
    from:  process.env.EMAIL ,
    subject: 'Hello!',
    html: '<h1>Hi, <br> Umeed Karta Hon Ke Ap Theek Thak Hon Gy</h1>' 
}

Email_Info.sendMail(Email_Body, function (error, info) {
    if (error) {
        console.log("Something Went Wrong")
        console.log(error)
    } else {
        console.log(`Email has been sent to ${Email_Body.to} with subject ${Email_Body.subject}`)
        console.log(info)
    }
})
