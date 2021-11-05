const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res) => {
  let data = req.body;
  if (
    data.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: 'Please fill all the fields' });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'byronzhao139@gmail.com',
      pass: 'tigger19950405',
    },
  });
  let mailOptions = {
    from: data.email,
    to: 'byronzhao139@gmail.com',
    subject: `message from ${data.name}`,
    html: `
        <h3>Informations</h3>
        <ul>
          <li>Name: ${data.name}</li>
          <li>Name: ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
      
      `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: 'Please fill in all the fields' });
      res.status(200).json({ msg: 'Thank you for reaching out!' });
    } catch (error) {
      if (error)
        return res.status(500).json({ msg: 'There is a server error' });
    }
  });
});
module.exports = router;
