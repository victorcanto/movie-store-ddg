import React, { useEffect, useState } from 'react';
import { Typography, useTheme } from '@mui/material';

import {
	addCartItem,
	checkCartItemExistence,
	FavoriteItem,
	Movie,
	removeFavoriteItem,
} from '../../shared';
import {
	selectCartItems,
	setCartItems,
	useAppDispatch,
	useAppSelector,
} from '../../store';
import { Button } from '../button/button.component';

export interface AddToCartButtonProps {
	item: Movie;
}

export function AddToCartButton({ item }: AddToCartButtonProps) {
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const cartItems = useAppSelector(selectCartItems);
	const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

	useEffect(() => {
		const match = checkCartItemExistence(cartItems, item);

		if (match) {
			setIsAddedToCart(true);
		} else {
			setIsAddedToCart(false);
		}
	}, [cartItems]);

	const toggle = (): void => setIsAddedToCart(!isAddedToCart);

	const addItemToCartHandler = (): void => {
		const newCartItems = addCartItem(cartItems, item);

		if (newCartItems) {
			dispatch(setCartItems(newCartItems));
		}
	};

	const removeItemToCartHandler = (): void => {
		const newCartItems = removeFavoriteItem(cartItems, item);

		if (newCartItems) {
			dispatch(setCartItems(newCartItems));
		}
	};

	useEffect(() => {
		if (isAddedToCart) {
			addItemToCartHandler();
		} else {
			removeItemToCartHandler();
		}
	}, [isAddedToCart]);

	return (
		<Button
			data-testid='add-to-cart-button'
			onClick={toggle}
			sx={{
				p: '1rem',
			}}
		>
			<Typography
				noWrap
				variant='h6'
				fontWeight={600}
				textAlign='center'
				color={theme.palette.common.white}
			>
				{isAddedToCart ? 'REMOVER' : 'ADICIONAR'}
			</Typography>
		</Button>
	);
}
