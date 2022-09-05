import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart/cart.slice';
import favoritesReducer from './favorites/favorites.slice';
import checkoutReducer from './checkout/checkout.slice';
import moviesReducer from './movies/movies.slice';

export const rootReducer = combineReducers({
	cart: cartReducer,
	favorites: favoritesReducer,
	checkout: checkoutReducer,
	movies: moviesReducer,
});
