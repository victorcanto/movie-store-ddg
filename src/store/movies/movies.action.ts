import { createAsyncThunk } from '@reduxjs/toolkit';
import { log } from 'console';
import {
	getMovieGenres,
	getMoviesByQuery,
	getMoviesPage,
} from '../../services';

export const fetchMovies = createAsyncThunk(
	'movies/fecthMovies',
	async (pageParam: number = 1) => {
		return (await getMoviesPage(pageParam)).results;
	},
);

export const fetchMoviesBySearchQuery = createAsyncThunk(
	'movies/fetchMoviesBySearchQuery',
	async (query: string) => {
		return (await getMoviesByQuery(query)).results;
	},
);

export const fetchMovieGenres = createAsyncThunk(
	'movies/fetchMovieGenres',
	async () => {
		return (await getMovieGenres()).genres;
	},
);
