import * as React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Badge, Tooltip } from '@mui/material';
import { selectCartQuantity } from '../../store/cart/cart.selector';
import {
	selectIsCartOpen,
	setIsCartOpen,
	setIsFavoritesOpen,
	useAppDispatch,
	useAppSelector,
} from '../../store';

export function CartNavigationIcon() {
	const dispatch = useAppDispatch();

	const cartQuantity = useAppSelector(selectCartQuantity);
	const isCartOpen = useAppSelector(selectIsCartOpen);

	const toggleIsCartOpen = (): void => {
		dispatch(setIsCartOpen(!isCartOpen));
		dispatch(setIsFavoritesOpen(false));
	};

	return (
		<Tooltip title='Carrinho' data-testid='cart-navigation-icon'>
			<Badge
				badgeContent={cartQuantity}
				color='secondary'
				onClick={toggleIsCartOpen}
			>
				<ShoppingCartRoundedIcon fontSize='large' />
			</Badge>
		</Tooltip>
	);
}
