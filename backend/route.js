const express = require('express');
require('dotenv').config();
const router = express.Router();
const nodemailer = require("nodemailer");
// sending the email
const sendMail = async (userEmail) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE, 
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD, 
        }
    });
    
  
    const info = await transporter.sendMail({
        from:  process.env.EMAIL_USERNAME, 
        to: userEmail, 
        subject: "Thanks for signing up!", 
        text: `Dear subscriber,\n\n${"We are thrilled to have you on board as one of our valued subscribers to the Nephara email list!\n\nWe wanted to extend our heartfelt gratitude for signing up to be the first to know when our ecommerce store opens. Your support and interest mean the world to us, and we are excited to share this journey with you.\n\nNephara is diligently working to curate a one-of-a-kind online shopping experience, and we can't wait to showcase our exclusive collection of products, deals, and surprises.\n\nStay tuned for updates, sneak peeks, and early access to our grand opening. As a special thank-you, we'll also be offering exclusive promotions to our subscribers.\n\nIf you have any questions or need further assistance, feel free to reach out to us. We value your feedback and suggestions as we strive to create an exceptional shopping platform.\n\nThank you once again for joining us on this exciting venture. Together, we will redefine the way you shop!\n\nBest regards,\nThe Nephara Team"}`, // plain text body
    });
};

//getting email in backend
router.post('/getemail', async (req, res) => {
    const { email } = req.body;
    await sendMail(email); 
    res.json({ message: "Email sent successfully" });
});

module.exports = router;
