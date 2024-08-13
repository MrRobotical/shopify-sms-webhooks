# Shopify Webhooks SMS Notification

This is a Node.js application that uses Twilio to send SMS notifications whenever a new order is created in a Shopify store. The application is designed to work with Shopify's webhook notifications.

## Features

- **Webhook Integration**: The app listens for the `orders/create` webhook from Shopify.
- **SMS Notifications**: Upon receiving a webhook event, the app sends an SMS notification using Twilio, containing details about the new order.
