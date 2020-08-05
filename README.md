# Strapi plugin Entreprenerd Stripe

## Installation
You should be able to install this by using npm

npm i strapi-plugin-entreprenerd-stripe

Alternatively drag this in the /plugins folder of your Strapi Install.

Then go in Roles & Permissions -> stripe -> And set the createPaymentIntent controller to be public

## Usage
Add your Private Key in the Admin Panel

## Generate a paymentIntent
POST API_URL/stripe/pay

Parameters:
amount: REQUIRED.
The amount in cents for your paymentIntent.

## This is taught in The Complete Strapi Course
You should also be able to extend this via the extensions system.
