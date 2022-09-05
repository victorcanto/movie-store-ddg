import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../shared';

export interface CartState {
	cartItems: CartItem[];
	isCartOpen: boolean;
}

const initialState: CartState = {
	cartItems: [],
	isCartOpen: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCartItems(state, action: PayloadAction<CartItem[]>) {
			state.cartItems = action.payload;
		},
		setIsCartOpen(state, action: PayloadAction<boolean>) {
			state.isCartOpen = action.payload;
		},
	},
});

export const { setCartItems, setIsCartOpen } = cartSlice.actions;

export default cartSlice.reducer;
