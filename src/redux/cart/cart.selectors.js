import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectItemCount = createSelector(
	[selectCartItems],
	(cartItems) => {
		return cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		);
	}
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(accumulatedTotal, cartItem) =>
			(accumulatedTotal += cartItem.quantity * cartItem.price),
		0
	)
);
