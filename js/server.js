const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Ви можете використовувати інший сервіс, наприклад, SMTP
        auth: {
            user: 'sunchopanza20@gmail.com',
            pass: '248582ash'
        }
    });

    const mailOptions = {
        from: 'sunchopanza20@gmail.com',
        to: email,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Помилка при відправці листа');
        } else {
            console.log('Лист надіслано: ' + info.response);
            res.status(200).send('Лист успішно надіслано');
        }
    });
});

app.listen(3000, () => {
    console.log('Сервер запущено на порту 3000');
});