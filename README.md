# Strapi plugin Entreprenerd Stripe

## Installation
You should be able to install this by using npm

```npm i strapi-plugin-entreprenerd-stripe```

After installing you will have to rebuild your admin

```npm run build```



Alternatively drag this in the /plugins folder of your Strapi Install.

Then go in Roles & Permissions -> stripe -> And set the createPaymentIntent controller to be public

## Usage
Add your Private Key in the Admin Panel

## Methods

| Method | Url         | Description                                    |
|--------|-------------|------------------------------------------------|
| POST   | /stripe/pay | Generates a paymentIntent for the given amount |

### /stripe/pay
| Parameter | Description                                 |
|-----------|---------------------------------------------|
| amount    | The amount in cents for your paymentIntent  |


## This is taught in The Complete Strapi Course
You should also be able to extend this via the extensions system.

## Troubleshooting

If you cannot see the plugin. Make sure to re-build your admin!
```npm run build```

## Improve this plugin

https://github.com/GalloDaSballo/strapi-plugin-entreprenerd-stripe
