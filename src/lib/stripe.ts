import Stripe from 'stripe'
export const stripe = new Stripe(import.meta.env.VITE_API_STRIPE_KEY, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'Bolsas Fafa',
  },
})
