import { Movie } from './movies.interfaces';

export type ExtractedKeysToFavoriteItem = Pick<
	Movie,
	'id' | 'title' | 'poster_path' | 'price'
>;

export interface FavoriteItem extends ExtractedKeysToFavoriteItem {}
