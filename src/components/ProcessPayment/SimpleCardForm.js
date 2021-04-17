import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './SimpleCardForm.css';
const SimpleCardForm = ({handlePaymentSuccess}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentError(null);
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentSuccess('Your payment is successful ' + paymentMethod.id);
      handlePaymentSuccess(paymentMethod.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="simple-card-form">
      <CardElement />
      </div>
      <br/>
      <button className="btn btn-success" type="submit" disabled={!stripe}>
        Pay
      </button>
      {
          paymentError && <p className="text-danger">
              {paymentError}
          </p>
      }
      {
          paymentSuccess &&    <p className="text-success">{paymentSuccess}</p>
      }
    </form>
  );
};

export default SimpleCardForm;