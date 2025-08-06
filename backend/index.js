const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const corsOptions = {
    methods: ['options', 'post'],
    origin: process.env.CORS_ALLOWED_HOSTNAME,
    optionsSuccessStatus: 200,
    preflightContinue: true,
};

const router = express.Router();
router.post('/api/email', async (req, res, next) => {
    const { service, date, name, email, tel } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.GOOGLE_EMAIL_ADDRESS,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
            }
        });

        const info = await transporter.sendEmail({
            from: email,
            to: process.env.GOOGLE_EMAIL_ADDRESS,
            subject: `Reserva ${service} - ${date.toLocaleDateString('es-ES')} ${date.toLocaleTimeString('es-ES')}`,
            text: '',
            html: '',
        })

        res.statusCode = 200;
        res.statusMessage = 'OK';
    } catch (e) {}
    next();
});

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.user(router);

const port = Number(`${process.env.BACKEND_PORT}`);

app.listen(port, () => {
    console.log(`Email Server Running on port: ${port}`);
});