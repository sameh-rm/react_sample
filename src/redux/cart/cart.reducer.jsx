import "./cart.types";
import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeCartItem } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_CART_ITEM:
      console.log("from reducer", state.cartItems);
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
