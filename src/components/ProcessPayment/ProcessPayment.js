import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_Up5ZVvGDaufTuBqaaMMgtc3000FbsXBZ7I');
const ProcessPayment = ({handlePaymentSuccess}) => {
    return (
        <div>
            
            <Elements stripe={stripePromise}>
                <SimpleCardForm handlePaymentSuccess={handlePaymentSuccess}></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;




