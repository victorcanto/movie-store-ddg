import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FavoritesState } from './favorites.slice';

export const selectFavoritesReducer = (state: RootState): FavoritesState =>
	state.favorites;

export const selectFavoriteItems = createSelector(
	selectFavoritesReducer,
	(favorites) => favorites.favoriteItems,
);

export const selectFavoritedQuantity = createSelector(
	selectFavoritesReducer,
	(favorites) => favorites.favoriteItems.length,
);

export const selectIsFavoritesOpen = createSelector(
	selectFavoritesReducer,
	(favorites) => favorites.isFavoritesOpen,
);
