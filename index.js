const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors');
const { renderMessage_1, renderMessage_2 } = require("./renderMessages");

const PORT = process.env.PORT || 5000;

const app = express()

app.use(cors())

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'contact.form.banzan@gmail.com',
        pass: 'banzancompany'
    }
  })



app.get('/',(req,res)=>{

    res.status(200).json({
        data:'ok'
    })
})



app.get('/mail/contact',(req,res)=>{

    const {name,email,message,subject} = req.query

    // job,education,relocate

    var mailOptions = {
        
        to: 'contact.form.banzan@gmail.com',
        subject: `${subject}`,
        html: renderMessage_1(req.query) ,
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



app.get('/mail/careers',(req,res)=>{

    const {name,email,message,subject} = req.query



    var mailOptions = {
        
        to: 'contact.form.banzan@gmail.com',
        subject: `${subject}`,
        html: renderMessage_2(req.query) ,
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


