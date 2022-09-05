import React, { useEffect, useState } from 'react';
import {
	Box,
	Card as MuiCard,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	IconButton,
	Typography,
	useTheme,
} from '@mui/material';

import { Movie } from '../../shared';
import { StarIcon } from '../star-icon/star-icon.component';
import { FavoriteIcon } from '../favorite-icon/favorite-icon.component';
import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button.component';
import { Price } from '../price/price.component';

export interface CardProps {
	item: Movie;
}

export function Card({ item }: CardProps) {
	const theme = useTheme();

	return (
		<MuiCard
			data-testid='card'
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				borderRadius: theme.shape.borderRadius,
				':hover': {
					boxShadow: theme.shadows[3],
					transition: '100ms linear',
				},
			}}
		>
			<Box sx={{ position: 'relative' }}>
				<IconButton
					sx={{
						position: 'absolute',
						top: '10px',
						right: '10px',
					}}
				>
					<FavoriteIcon item={item} />
				</IconButton>

				<CardMedia
					sx={{ boxShadow: theme.shadows[3] }}
					component='img'
					width='100%'
					image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
					alt={item.title}
				/>
			</Box>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					gap: 1,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							gap: 1,
						}}
					>
						<Typography noWrap variant='h5' fontWeight={600}>
							{item.title}
						</Typography>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<StarIcon />
							<Typography>{item.vote_count}</Typography>
						</Box>
					</Box>

					<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
						{item.genres.map(({ name }) => (
							<Chip
								label={name}
								sx={{
									color: theme.palette.secondary.light,
								}}
								size='small'
							/>
						))}
					</Box>

					<Typography variant='h4' textAlign='center'>
						<Price value={item.price} />
					</Typography>
				</Box>
			</CardContent>
			<CardActions sx={{ width: '100%', p: 0 }}>
				<AddToCartButton item={item} />
			</CardActions>
		</MuiCard>
	);
}
