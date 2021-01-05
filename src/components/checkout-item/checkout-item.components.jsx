import React from "react";
import "./checkout-item.styles.scss";
import {
	addItemToCart,
	clearCartItem,
	removeCartItem,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckOutItem = ({
	cartItem,
	clearCartItem,
	removeCartItem,
	addItemToCart,
}) => {
	const { name, price, quantity, imageUrl } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="price">{price}</span>

			<span className="quantity">
				<div className="arrow" onClick={() => removeCartItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItemToCart(cartItem)}>
					&#10095;
				</div>
			</span>

			<div onClick={() => clearCartItem(cartItem)} className="remove-button">
				&#10005;
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	clearCartItem: (item) => dispatch(clearCartItem(item)),
	removeCartItem: (item) => dispatch(removeCartItem(item)),
	addItemToCart: (item) => dispatch(addItemToCart(item)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
