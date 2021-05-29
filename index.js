var express = require('express')
var nodemailer = require('nodemailer')
var cors = require('cors')

var app = express()

app.use(cors())

app.get('/',(req,res)=>{

    res.status(200).json({
        data:'ok'
    })
})

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jithinksatheesh@gmail.com',
        pass: 'jks21@1997'
    }
  })

app.get('/mail/contact',(req,res)=>{

    const {name,email,phoneNo,message,subject,linkedin,company} = req.query

    var mailOptions = {
        
        to: 'jithinksatheesh@gmail.com',
        subject: `${subject}`,

text: ` 

Message from  ${email}
=========================

${message}


=========================
Name : ${name}  
email : ${email} 
phoneNo : ${phoneNo}
linkedin: ${linkedin}
company : ${company} 


                `,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).json({
                error : "something went wrong"
            })
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({
                name : name,
                email : email,
                message : message,
            })
        }
    });

    
})

console.log("started...")
app.listen(3300)