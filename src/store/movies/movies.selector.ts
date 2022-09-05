import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { MoviesState } from './movies.slice';

export const selectMoviesReducer = (state: RootState): MoviesState =>
	state.movies;

export const selectMoviesList = createSelector(
	selectMoviesReducer,
	(movies) => movies.list,
);

export const selectMoviesPageNum = createSelector(
	selectMoviesReducer,
	(movies) => movies.pageNum,
);

export const selectMovieGenres = createSelector(
	selectMoviesReducer,
	(movies) => movies.genres,
);

export const selectSearchParam = createSelector(
	selectMoviesReducer,
	(movies) => movies.search,
);

export const selectMoviesLoading = createSelector(
	selectMoviesReducer,
	(movies) => movies.loading,
);
