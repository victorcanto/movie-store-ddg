import * as React from 'react';
import MoreVert from '@mui/icons-material/MoreVert';
import { Badge, Tooltip } from '@mui/material';
import { selectCartQuantity } from '../../store/cart/cart.selector';
import { selectFavoritedQuantity, useAppSelector } from '../../store';

export function MoreIcon() {
	const cartQuantity = useAppSelector(selectCartQuantity);
	const favoritedQuantity = useAppSelector(selectFavoritedQuantity);

	const total = cartQuantity + favoritedQuantity;

	return (
		<Tooltip title='Mais' data-testid='more-icon'>
			<Badge badgeContent={total} color='secondary'>
				<MoreVert data-testid='more-icon' />
			</Badge>
		</Tooltip>
	);
}
