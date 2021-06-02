const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: 'pro2.mail.ovh.net',
    /* port: 465,
     secure: true,*/
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWD
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

router.post('/send-mail', (req, res) => {

    let name = req.body.name;
    let society = req.body.society;
    let email = req.body.email;
    let phone = req.body.phone;
    let subject = req.body.subject;
    let message = req.body.message;

    let head = name.concat(' | ', subject);
    let body = '[Coordonnées]\n'.concat('Nom: '.concat(name, '\nSociété: ')).concat(society, '\nEmail: ')
        .concat(email, '\nTéléphone: ').concat(phone).concat('\n\n[Message]\n', message);

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: head,
        text: body
    };

    transporter.sendMail(mailOptions,  (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Email send');
        }
    });
    res.redirect('/contact');
});

module.exports = router;