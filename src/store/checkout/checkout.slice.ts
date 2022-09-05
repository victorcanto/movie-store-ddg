import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteItem } from '../../shared';

export interface CheckoutState {
	isCompletePurchase: boolean;
	userName: string;
	error: Error | null;
}

const initialState: CheckoutState = {
	isCompletePurchase: false,
	userName: '',
	error: null,
};

const checkoutSlice = createSlice({
	name: 'checkout',
	initialState,
	reducers: {
		setIsCompletedPurchase(state, action: PayloadAction<boolean>) {
			state.isCompletePurchase = action.payload;
		},
		setUserNameFromCheckout(state, action: PayloadAction<string>) {
			state.userName = action.payload;
		},
	},
});

export const { setIsCompletedPurchase, setUserNameFromCheckout } =
	checkoutSlice.actions;

export default checkoutSlice.reducer;
