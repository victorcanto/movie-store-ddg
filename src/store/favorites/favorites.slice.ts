import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteItem } from '../../shared';

export interface FavoritesState {
	favoriteItems: FavoriteItem[];
	isFavoritesOpen: boolean;
}

const initialState: FavoritesState = {
	favoriteItems: [],
	isFavoritesOpen: false,
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavoriteItems(state, action: PayloadAction<FavoriteItem[]>) {
			state.favoriteItems = action.payload;
		},
		setIsFavoritesOpen(state, action: PayloadAction<boolean>) {
			state.isFavoritesOpen = action.payload;
		},
	},
});

export const { setFavoriteItems, setIsFavoritesOpen } = favoritesSlice.actions;

export default favoritesSlice.reducer;
