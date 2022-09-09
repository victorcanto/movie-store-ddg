import axios from 'axios';
import { GenrersResponse, MoviesResponse } from '../shared';

export const moviesApi = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
		Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`,
	},
	params: {
		language: 'pt-BR',
	},
});

export const getMoviesPage = async (pageParam: number = 1, options?: {}) => {
	const response = await moviesApi.get<MoviesResponse>(
		`/discover/movie?page=${pageParam}`,
	);
	return response.data;
};

export const getMoviesByQuery = async (queryParam: string = '') => {
	const response = await moviesApi.get<MoviesResponse>(
		`/search/movie?query=${queryParam}`,
	);
	return response.data;
};

export const getMovieGenres = async () => {
	const response = await moviesApi.get<GenrersResponse>('/genre/movie/list');
	return response.data;
};
