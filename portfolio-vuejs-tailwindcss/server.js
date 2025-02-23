const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3001; 

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'mail.bacskaipeter.xyz', 
    port: 587, 
    secure: false,
    auth: {
        user: 'main@bacskaipeter.xyz', 
        pass: 'Pereira400@@', 
    },
    tls: {
        rejectUnauthorized: false, 
    },
});

app.post('/send', async (req, res) => {
    const { name, email, subject, message, file } = req.body;

    const mailOptions = {
        from: 'main@bacskaipeter.xyz', 
        to: 'main@bacskaipeter.xyz', 
        subject: `Üzenet a(z) ${name} felhasználótól: ${subject}`,
        text: `Név: ${name}\nEmail: ${email}\nÜzenet: ${message}`,
       
        attachments: file ? [{ filename: file.name, content: file.data }] : [],
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'E-mail sikeresen elküldve!' });
    } catch (error) {
        console.error('Hiba az e-mail küldésekor:', error);
        res.status(500).json({ message: 'Hiba az e-mail küldésekor' });
    }
});

app.listen(port, () => {
    console.log(`Szerver fut a http://localhost:${port} címen`);
});