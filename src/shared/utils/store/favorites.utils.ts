import { FavoriteItem, Movie } from '../..';

export const checkFavoriteItemExistence = (
	favoriteItems: FavoriteItem[],
	itemToCheck: Movie,
): FavoriteItem | void =>
	favoriteItems.find((cartItem) => cartItem.id === itemToCheck.id);

export const addFavoriteItem = (
	favoriteItems: FavoriteItem[],
	itemToAdd: Movie,
): FavoriteItem[] | void => {
	const { id, title, poster_path, popularity } = itemToAdd;

	const existingFavoriteItem = checkFavoriteItemExistence(
		favoriteItems,
		itemToAdd,
	);

	if (existingFavoriteItem) {
		return;
	}

	return [
		...favoriteItems,
		{ id, title, poster_path, price: popularity as number },
	];
};

export const removeFavoriteItem = (
	favoriteItems: FavoriteItem[],
	favoriteItemToRemove: FavoriteItem,
): FavoriteItem[] =>
	favoriteItems.filter(
		(favoriteItem) => favoriteItem.id !== favoriteItemToRemove.id,
	);
