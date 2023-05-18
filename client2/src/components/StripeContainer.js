 import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm  from './PaymentForm'

const PUBLIC_KEY='pk_test_51N8oPZGvqFuPYelvpvxjZVmxsp1hh9oELxfmwbkWziOPvRCwwo0IUB29bvUQM2OTj8l29yOMVK9IFn6X5yhTBqKh00Dzsz3Ej0'
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return ( 
        <Elements stripe={stripeTestPromise}>
              <PaymentForm/> 
        </Elements>
    )
}