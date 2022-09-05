import * as React from 'react';
import {
	Box,
	Grid,
	IconButton,
	ListItem as MuiListItem,
	ListItemText,
	Tooltip,
	Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartItem, FavoriteItem } from '../../shared';
import { selectIsFavoritesOpen, useAppSelector } from '../../store';
import { Price } from '../price/price.component';

export interface ListItemProps {
	item: CartItem | FavoriteItem;
	removeItem: () => void;
	addItemToCart?: () => void;
}

export function ListItem({ item, removeItem, addItemToCart }: ListItemProps) {
	const isFavoritesOpen = useAppSelector(selectIsFavoritesOpen);

	return (
		<Grid data-testid='list-item' container spacing={3} alignItems='center'>
			<Grid item xs={2}>
				<img
					width='50px'
					src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
					alt={item?.title}
				/>
			</Grid>
			<Grid item xs={4}>
				<Typography>{item.title}</Typography>
			</Grid>
			<Grid item xs={2}>
				<Typography>{1}</Typography>
			</Grid>
			<Grid item xs={2}>
				<Price value={item.price} />
			</Grid>
			<Grid item xs={2}>
				<Box>
					{isFavoritesOpen ? (
						<IconButton
							onClick={addItemToCart}
							edge='end'
							aria-label='add to cart'
						>
							<ShoppingCartIcon />
						</IconButton>
					) : null}
					<Tooltip title='Remover do carrinho'>
						<IconButton
							onClick={removeItem}
							edge='end'
							aria-label='delete'
						>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</Box>
			</Grid>
		</Grid>
	);
}
