import React, { useState } from 'react';
import { Badge, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
	useAppSelector,
	useAppDispatch,
	selectFavoritedQuantity,
	setIsFavoritesOpen,
	selectIsFavoritesOpen,
	setIsCartOpen,
} from '../../store';

export function FavoriteNavigationIcon() {
	const dispatch = useAppDispatch();

	const favoritedQuantity = useAppSelector(selectFavoritedQuantity);
	const isFavoritesOpen = useAppSelector(selectIsFavoritesOpen);

	const toggleIsFavoritesOpen = (): void => {
		dispatch(setIsFavoritesOpen(!isFavoritesOpen));
		dispatch(setIsCartOpen(false));
	};

	return (
		<Tooltip
			title='Filmes favoritos'
			data-testid='favorite-navigation-icon'
		>
			<Badge
				badgeContent={favoritedQuantity}
				color='secondary'
				onClick={toggleIsFavoritesOpen}
			>
				<FavoriteIcon fontSize='large' />
			</Badge>
		</Tooltip>
	);
}
