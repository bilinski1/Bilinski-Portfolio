var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');


const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)


var transport = {
    host: 'mail.privateemail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    secure: false,
    debug: false,
    logger: true,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
/*
transporter.sendMail({
  from: "office@bdesign.dev",
  to: "bilinski.mateusz@gmail.com",
  subject: "subject",
  text: "contact.message"
}, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
*/

router.post('/send', (req, res, next) => {
  var firstname = req.body.firstname
  var phone = req.body.phone
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${firstname} \n email: ${email} \n phone: ${phone} \n message: ${message} `
  var mail = {
    from: "office@bdesign.dev",
    to: 'bilinski.mateusz@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'B-Design New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})


