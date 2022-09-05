import { Movie } from './movies.interfaces';

export type ExtractedKeysToCartItem = Pick<
	Movie,
	'id' | 'title' | 'poster_path' | 'price'
>;

export interface CartItem extends ExtractedKeysToCartItem {
	quantity?: number;
}
