var express = require('express')
var nodemailer = require('nodemailer')
var cors = require('cors')
// const cool = require('cool-ascii-faces');
const PORT = process.env.PORT || 5000;

var app = express()

app.use(cors())

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jithinksatheesh@gmail.com',
        pass: 'jks21@1997'
    }
  })



app.get('/',(req,res)=>{

    res.status(200).json({
        data:'ok'
    })
})



app.get('/mail/contact',(req,res)=>{

    const {name,email,phoneNo,message,subject,linkedin,company} = req.query

    // job,education,relocate

    var mailOptions = {
        
        to: 'jithinksatheesh@gmail.com',
        subject: `${subject}`,
        text: renderMessage_1(req.query) ,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).json({
                error:error,
                message : "something went wrong"
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
app.listen(PORT)


    const renderMessage_1 = ({name,email,phoneNo,message,subject,linkedin,company})=>{


        return(
                ` 

        Message from  ${email}
        =========================

        ${message}


        =========================
        Name : ${name}  
        email : ${email} 
        phoneNo : ${phoneNo}
        linkedin: ${linkedin}
        company : ${company} 


                        `
            )
    }