import { useSlotProps } from '@mui/base';
import { useEffect, useState } from 'react';
import {
	fetchMovieGenres,
	fetchMovies,
	fetchMoviesBySearchQuery,
	selectMovieGenres,
	selectMoviesList,
	selectMoviesPageNum,
	selectSearchParam,
	setPageNum,
	useAppDispatch,
	useAppSelector,
} from '../../store';
import { Genre, Movie, MovieApi } from '../models/movies.interfaces';

const getMoviesComplete = (
	movies: MovieApi[],
	genres: Genre[],
	search: string,
) => {
	return movies
		.map((movie) => {
			return {
				...movie,
				genres: genres.filter(({ id }) => movie.genre_ids.includes(id)),
				price: 9.99,
			};
		})
		.filter(
			(movie) =>
				movie.title.toLowerCase().includes(search.toLowerCase()) &&
				movie.poster_path,
		);
};

const transformSearchQuery = (query: string): string => query.replace(' ', '+');

export const useMovies = () => {
	const dispatch = useAppDispatch();
	const pageNum = useAppSelector(selectMoviesPageNum);

	const movies = useAppSelector(selectMoviesList);

	const genres = useAppSelector(selectMovieGenres);
	const searchParam = useAppSelector(selectSearchParam);

	const [results, setResults] = useState<Movie[]>([]);

	useEffect(() => {
		dispatch(fetchMovieGenres());
		dispatch(fetchMovies(pageNum));
	}, []);

	useEffect(() => {
		dispatch(fetchMovies(pageNum));
	}, [pageNum]);

	useEffect(() => {
		if (searchParam.length) {
			dispatch(
				fetchMoviesBySearchQuery(transformSearchQuery(searchParam)),
			);
		} else {
			dispatch(fetchMovies(1));
		}
	}, [searchParam]);

	useEffect(() => {
		setResults((previousResult) =>
			(pageNum === 1 && !searchParam.length) ||
			pageNum === 1 ||
			searchParam.length
				? getMoviesComplete(movies, genres, searchParam)
				: [
						...previousResult,
						...getMoviesComplete(movies, genres, searchParam),
				  ],
		);
	}, [movies]);

	const refetch = () => {
		dispatch(setPageNum(pageNum + 1));
	};

	return { results, refetch };
};
