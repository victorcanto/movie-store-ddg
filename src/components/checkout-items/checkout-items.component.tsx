import { Box, Grid, List, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { CartItem, removeCartItem } from '../../shared';
import {
	selectCartItems,
	setCartItems,
	useAppDispatch,
	useAppSelector,
} from '../../store';
import { ListItem } from '../list-item/list-item.component';

export function CheckoutItems() {
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const cartItems = useAppSelector(selectCartItems);

	const removeItemHander = (item: CartItem) => () => {
		const newCartItems = removeCartItem(cartItems, item);
		if (newCartItems) {
			dispatch(setCartItems(newCartItems));
		}
	};

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
			}}
		>
			<Grid data-testid='checkout-items' container spacing={2}>
				<Grid item xs={12} md={12}>
					<List>
						{cartItems.map((item) => {
							return (
								<ListItem
									key={item.id}
									item={item}
									removeItem={removeItemHander(item)}
								/>
							);
						})}
					</List>
				</Grid>
			</Grid>
		</Box>
	);
}
