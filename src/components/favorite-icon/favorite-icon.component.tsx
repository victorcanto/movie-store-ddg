import { Tooltip, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MuiFavoriteIcon from '@mui/icons-material/Favorite';
import {
	addFavoriteItem,
	checkFavoriteItemExistence,
	Movie,
	removeFavoriteItem,
} from '../../shared';
import {
	selectFavoriteItems,
	setFavoriteItems,
	useAppDispatch,
	useAppSelector,
} from '../../store';

export interface FavoriteIconProps {
	item: Movie;
}

export function FavoriteIcon({ item }: FavoriteIconProps) {
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const favoriteItems = useAppSelector(selectFavoriteItems);
	const [isFavorited, setIsFavorited] = useState<boolean>(false);

	useEffect(() => {
		const match = checkFavoriteItemExistence(favoriteItems, item);

		if (match) {
			setIsFavorited(true);
		} else {
			setIsFavorited(false);
		}
	}, [favoriteItems]);

	const toggle = (): void => setIsFavorited(!isFavorited);

	const addItemToFavoritesHandler = (): void => {
		const newFavoriteItems = addFavoriteItem(favoriteItems, item);

		if (newFavoriteItems) {
			dispatch(setFavoriteItems(newFavoriteItems));
		}
	};

	const removeItemToFavoritesHandler = (): void => {
		const newFavoriteItems = removeFavoriteItem(favoriteItems, item);

		if (newFavoriteItems) {
			dispatch(setFavoriteItems(newFavoriteItems));
		}
	};

	useEffect(() => {
		if (isFavorited) {
			addItemToFavoritesHandler();
		} else {
			removeItemToFavoritesHandler();
		}
	}, [isFavorited]);

	return (
		<Tooltip
			title={isFavorited ? 'Favoritado' : 'Favoritar'}
			data-testid='favorite-icon'
		>
			<MuiFavoriteIcon
				data-testid='favorite-icon'
				sx={{
					fill: isFavorited
						? theme.palette.primary.main
						: theme.palette.secondary.main,
				}}
				onClick={toggle}
				fontSize='large'
			/>
		</Tooltip>
	);
}
