import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { selectCartTotal, useAppSelector } from '../../store';
import { Button } from '../button/button.component';
import { Price } from '../price/price.component';

export interface CartTotalProps {
	onCloseMenuHandler: () => void;
}
export function CartTotal({ onCloseMenuHandler }: CartTotalProps) {
	const total = useAppSelector(selectCartTotal);

	const { pathname } = useLocation();
	const isCheckout = () => pathname === '/checkout';

	const getResultText = () => (total ? 'Finalizar compra' : 'Carrinho vazio');

	return (
		<Box data-testid='cart-total'>
			<Typography sx={{ mt: 4, mb: 2 }} variant='h4' component='div'>
				Total: <Price value={total} />
			</Typography>
			{!isCheckout() ? (
				<Button
					disabled={!total}
					component={Link}
					to='/checkout'
					sx={{ p: '1.2rem' }}
					onClick={onCloseMenuHandler}
				>
					<Typography>{getResultText()}</Typography>
				</Button>
			) : null}
		</Box>
	);
}
