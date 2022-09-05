import { CartItem, Movie } from '../..';

export const checkCartItemExistence = (
	cartItems: CartItem[],
	itemToCheck: Movie,
): CartItem | void =>
	cartItems.find((cartItem) => cartItem.id === itemToCheck.id);

export const addCartItem = (
	cartItems: CartItem[],
	itemToAdd: Movie,
): CartItem[] | void => {
	const { id, title, poster_path, price } = itemToAdd;
	const existingCartItem = checkCartItemExistence(cartItems, itemToAdd);

	if (existingCartItem) {
		return;
	}

	return [...cartItems, { id, title, poster_path, price, quantity: 1 }];
};

export const removeCartItem = (
	cartItems: CartItem[],
	itemToRemove: CartItem,
): CartItem[] =>
	cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
