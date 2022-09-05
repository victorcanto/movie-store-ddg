import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CheckoutState } from './checkout.slice';

export const selectCheckoutReducer = (state: RootState): CheckoutState =>
	state.checkout;

export const selectIsCompletePurchase = createSelector(
	selectCheckoutReducer,
	(checkout) => checkout.isCompletePurchase,
);

export const selectUserNameFromCheckout = createSelector(
	selectCheckoutReducer,
	(checkout) => checkout.userName,
);
