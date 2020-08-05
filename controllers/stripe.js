'use strict';
const unitializedStripe = require('stripe')
/**
 * stripe.js controller
 *
 * @description: A set of functions called "actions" of the `stripe` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },

  updateSettings: async (ctx) => {
    const {user} = ctx.state
    const {pk} = ctx.request.body

    //Ensure user is admin
    if(user.roles[0].id != 1){
      return ctx.unauthorized("Only administrators allowed!")
    }

    if(!pk){
      return ctx.throw(400, "Please provide a private key")
    }

    const pluginStore = strapi.store({
      environment: strapi.config.environment,
      type: 'plugin',
      name: 'entreprenerd_stripe'
    })

    const result = await pluginStore.set({ key: 'pk', value: pk })

    ctx.send({
      result
    })
  },

  retrieveSettings: async (ctx) => {
    const {user} = ctx.state

    if(user.roles[0].id != 1){
      return ctx.unauthorized("Only admins")
    }

    const pluginStore = strapi.store({
      environment: strapi.config.environment,
      type: 'plugin',
      name: 'entreprenerd_stripe'
    })

    const pk = await pluginStore.get({ key: 'pk' })

    ctx.send({
      pk: pk ? pk : ''
    })
  },

  createPaymentIntent: async (ctx) => {
    let {amount} = ctx.request.body
    amount = parseInt(amount)

    if(isNaN(amount) || amount === 0){
      return ctx.throw(400, "Please provide a valid amount")
    }

    const pluginStore = strapi.store({
      environment: strapi.config.environment,
      type: 'plugin',
      name: 'entreprenerd_stripe'
    })

    const pk = await pluginStore.get({key: 'pk'})

    const stripe = unitializedStripe(pk)

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd"
    })

    ctx.send({paymentIntent})
  }
};
