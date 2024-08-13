require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const PORT = 3000;

// Twilio credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

app.use(bodyParser.json());

// Webhook endpoint for Shopify Flow
app.post('/webhook/orders/create', (req, res) => {
  const orderData = req.body;
  const message = `New Order Created! ID: ${orderData.id}, Total: ${orderData.total_price}, Email: ${orderData.email}`;

  client.messages
    .create({
      body: message,
      from: '+12564491699',
      to: '+15148895835',
    })
    .then((message) => console.log(`SMS sent: ${message.sid}`))
    .catch((error) => console.error('Error sending SMS:', error));

  res.status(200).send('Webhook received and SMS sent');
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
