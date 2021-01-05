import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";
import React from "react";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GxS4nAeJuYnf85HHaYtT2BYO11zMBdssnjfroLLiDmSsoCP94N60PP65VE4TqrynSIAfab07AnH0xy2DGJNYFpw00X4KBXZNk";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
