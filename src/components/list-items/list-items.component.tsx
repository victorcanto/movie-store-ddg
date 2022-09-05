import React, { useEffect, useState } from 'react';
import {
	Box,
	List,
	Button,
	Grid,
	Typography,
	IconButton,
	Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionGroup } from 'react-transition-group';
import {
	CartItem,
	FavoriteItem,
	removeFavoriteItem,
	removeCartItem,
	addCartItem,
	Movie,
} from '../../shared';

import {
	selectCartItems,
	selectFavoriteItems,
	selectIsCartOpen,
	selectIsFavoritesOpen,
	setCartItems,
	setFavoriteItems,
	useAppDispatch,
	useAppSelector,
} from '../../store';
import { ListItem } from '../list-item/list-item.component';

export interface ListItemsProps {
	title: string;
	emptyMessage: string;
	onCloseMenuHandler: () => void;
}

export function ListItems({
	title,
	emptyMessage,
	onCloseMenuHandler,
}: ListItemsProps) {
	const [listItems, setListItems] = useState<CartItem[] | FavoriteItem[]>([]);
	const isCartOpen = useAppSelector(selectIsCartOpen);
	const isFavoritesOpen = useAppSelector(selectIsFavoritesOpen);
	const cartItems = useAppSelector(selectCartItems);
	const favoriteItems = useAppSelector(selectFavoriteItems);
	const dispatch = useAppDispatch();

	const removeItemHander = (item: CartItem | FavoriteItem) => () => {
		if (isCartOpen) {
			const newCartItems = removeCartItem(cartItems, item);
			if (newCartItems) {
				dispatch(setCartItems(newCartItems));
				return;
			}
		}

		if (isFavoritesOpen) {
			const newFavoriteItems = removeFavoriteItem(favoriteItems, item);
			if (newFavoriteItems) {
				dispatch(setFavoriteItems(newFavoriteItems));
			}
		}
	};

	const addItemToCartHandler = (item: CartItem) => () => {
		const newCartItems = addCartItem(cartItems, item as Movie);

		if (newCartItems) {
			dispatch(setCartItems(newCartItems));
		}
	};

	const clearItemHandler = () => {
		if (isCartOpen) {
			dispatch(setCartItems([]));
			return;
		}

		if (isFavoritesOpen) {
			dispatch(setFavoriteItems([]));
		}
	};

	useEffect(() => {
		if (isCartOpen) {
			setListItems(cartItems);
			return;
		}
		if (isFavoritesOpen) {
			setListItems(favoriteItems);
		}
	}, [isCartOpen, isFavoritesOpen, cartItems, favoriteItems]);

	return (
		<Box sx={{ flexGrow: 1, maxWidth: 752 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={12}>
					<Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Typography
								sx={{ mt: 4, mb: 2 }}
								variant='h4'
								component='div'
							>
								{title}
							</Typography>

							<IconButton
								size='large'
								aria-label='close'
								color='inherit'
								onClick={onCloseMenuHandler}
							>
								<CloseIcon />
							</IconButton>
						</Box>

						{listItems.length ? (
							<Button onClick={clearItemHandler}>Esvaziar</Button>
						) : null}
					</Box>

					<List data-testid='list-items'>
						<TransitionGroup>
							{listItems.length ? (
								listItems.map((item) => {
									return (
										<Collapse key={item.id}>
											<ListItem
												item={item}
												removeItem={removeItemHander(
													item,
												)}
												addItemToCart={addItemToCartHandler(
													item,
												)}
											/>
										</Collapse>
									);
								})
							) : (
								<Collapse>
									<Typography component='p'>
										{emptyMessage}
									</Typography>
								</Collapse>
							)}
						</TransitionGroup>
					</List>
				</Grid>
			</Grid>
		</Box>
	);
}
