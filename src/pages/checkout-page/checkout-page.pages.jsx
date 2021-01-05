import React from "react";
import "./checkout-page.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";

import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item.components";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
const CheckOutBlock = ({ name }) => (
	<div className="header-block">
		<span>{name}</span>
	</div>
);
const CheckOutPage = ({ cartItems, cartTotal }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<CheckOutBlock name="Product" />
				<CheckOutBlock name="Description" />
				<CheckOutBlock name="Price" />
				<CheckOutBlock name="Quantity" />
				<CheckOutBlock name="Remove" />
			</div>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CheckOutItem key={cartItem.id} cartItem={cartItem} />
				))
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
			<span className="total">TOTAL: {cartTotal}$</span>
			<div className="test-warning">
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp : 01/22 - CVV:123
			</div>
			<StripeCheckoutButton price={cartTotal} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal,
});
export default connect(mapStateToProps)(CheckOutPage);
