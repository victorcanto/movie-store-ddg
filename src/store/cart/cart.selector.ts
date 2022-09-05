import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CartState } from './cart.slice';

export const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
	selectCartReducer,
	(cart) => cart.cartItems,
);

export const selectIsCartOpen = createSelector(
	selectCartReducer,
	(cart) => cart.isCartOpen,
);

export const selectCartQuantity = createSelector(
	selectCartItems,
	(cartItems) => cartItems.length,
);

export const selectCartTotal = createSelector(selectCartItems, (cartItems) => {
	return cartItems.reduce((total, cartItem) => {
		return total + cartItem.price;
	}, 0);
});
