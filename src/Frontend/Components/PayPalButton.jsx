 
import React, { useEffect, useRef } from 'react';

const loadPayPalScript = (clientId) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });
};

const PayPalButton = ({ clientId, description, amount, invoiceId }) => {
  const paypalRef = useRef();

  useEffect(() => {
    loadPayPalScript(clientId).then(() => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              description: description,
              amount: {
                value: amount,
              },
              invoice_id: invoiceId, // Optional if you want to track invoices
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
            // Handle successful transaction here
          });
        },
        onError: (err) => {
          console.error('PayPal Checkout onError', err);
          // Handle errors here
        }
      }).render(paypalRef.current);
    });
  }, [clientId, description, amount, invoiceId]);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;
