export interface MovieApi {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language?: string;
	original_title?: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean | string;
	vote_average: number;
	vote_count: number;
}

export interface Genre {
	id: number;
	name: string;
}

export interface Movie extends MovieApi {
	price: number;
	genres: Genre[];
}

export interface MoviesResponse {
	page: number;
	results: MovieApi[];
	total_pages: number;
	total_results: number;
}

export interface GenrersResponse {
	genres: Genre[];
}
