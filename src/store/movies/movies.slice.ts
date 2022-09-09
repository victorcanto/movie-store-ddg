import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genre, Movie, MovieApi } from '../../shared';
import {
	fetchMovies,
	fetchMovieGenres,
	fetchMoviesBySearchQuery,
} from './movies.action';

export interface MoviesState {
	pageNum: number;
	list: MovieApi[] | Movie[];
	search: string;
	genres: Genre[];
	loading: boolean;
	error: string | undefined;
}

const initialState: MoviesState = {
	pageNum: 1,
	list: [],
	search: '',
	genres: [],
	loading: false,
	error: 'null',
};

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setPageNum(state, action: PayloadAction<number>) {
			state.pageNum = action.payload;
		},
		setSearchParam(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchMovies.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(fetchMovies.fulfilled, (state, action) => {
			state.loading = false;

			state.list = action.payload;

			state.error = '';
		});
		builder.addCase(fetchMovies.rejected, (state, action) => {
			state.loading = false;
			state.list = [];
			state.error = action.error.message;
		});

		builder.addCase(fetchMovieGenres.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(fetchMovieGenres.fulfilled, (state, action) => {
			state.loading = false;
			state.genres = action.payload;
			state.error = '';
		});
		builder.addCase(fetchMovieGenres.rejected, (state, action) => {
			state.loading = false;
			state.genres = [];
			state.error = action.error.message;
		});

		builder.addCase(fetchMoviesBySearchQuery.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(fetchMoviesBySearchQuery.fulfilled, (state, action) => {
			state.loading = false;

			state.list = action.payload;

			state.error = '';
		});
		builder.addCase(fetchMoviesBySearchQuery.rejected, (state, action) => {
			state.loading = false;
			state.genres = [];
			state.error = action.error.message;
		});
	},
});

export const { setPageNum, setSearchParam } = moviesSlice.actions;

export default moviesSlice.reducer;
