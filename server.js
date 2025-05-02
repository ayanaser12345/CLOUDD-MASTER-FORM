const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5002;

//middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/contactform.html')
})

app.post('/contact', (req,res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.EMAIL_PASS
        }
    })

        const mailOptions = {
            from: process.env.USER_EMAIL,
            to: req.body.email,
            subject: `Message from ${req.body.name}: ${req.body.subject}`,
            text: `${req.body.message}\n\n--\n${req.body.signature}`
        
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send('error');
        } else{
            console.log('Email sent: '+ info.response);
            res.send('success') // Fixed the typo from 'sucess' to 'success'
        }
    })
    
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

