import express from "express";
import Stripe from "stripe";

const router = express.Router();
// const stripe = Stripe(process.env.STRIPEKEY);
 const stripe = new Stripe("sk_test_51KEyYPSFVJX5TaSGiyCNDpm2JsUpp7vfh5Xk6SFRUykFUS5GZZEVG1AUcu4D2h8jXhJnUNWppHhn5foBl4EcFXE000vilrFGB7")

import { verifyToken } from "../middleware/verifyToken.js";
// const KEY = process.env.STRIPE_KEY
// const stripe = require("stripe")(KEY);

router.post("/payment",async (req,res)=>{
  console.log(req.body.token,req.body.amount)
  try {
    const payment = await stripe.paymentIntents.create(
      {
        amount: req.body.amount,
        currency: "inr",
      });
      res.status(201).json({message:payment.client_secret})
  } catch (error) {
    res.status(402).json({message:error})
  }
    
})


export default router;