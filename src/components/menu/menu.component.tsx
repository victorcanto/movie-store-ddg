import React, { useEffect, useState } from 'react';
import { Box, Drawer as MuiDrawer, useTheme } from '@mui/material';

import {
	selectIsCartOpen,
	selectIsFavoritesOpen,
	setIsCartOpen,
	setIsFavoritesOpen,
	useAppDispatch,
	useAppSelector,
} from '../../store';
import { ListItems } from '../list-items/list-items.component';
import { CartTotal } from '../cart-total/cart-total.component';

export function Menu() {
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const isCartOpen = useAppSelector(selectIsCartOpen);
	const isFavoriteOpen = useAppSelector(selectIsFavoritesOpen);

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [title, setTitle] = useState<string>('');
	const [emptyMessage, setEmptyMessage] = useState<string>('');

	const closeMenu = (): void => {
		setIsOpen(false);
	};

	const onCloseMenuHandler = (): void => {
		dispatch(setIsCartOpen(false));
		dispatch(setIsFavoritesOpen(false));
		closeMenu();
	};
	const openMenu = (): void => setIsOpen(true);

	const cartTitle = (): void => setTitle('Meu Carrinho');
	const favoritesTitle = (): void => setTitle('Meus Favoritos');

	const cartEmptyMessage = (): void =>
		setEmptyMessage('Nenhum filme foi adicionado.');
	const favoritesEmptyMessage = (): void =>
		setEmptyMessage('Nenhum filme favoritado.');

	useEffect(() => {
		if (!isCartOpen && !isFavoriteOpen) {
			closeMenu();
		} else if (isCartOpen && !isFavoriteOpen) {
			openMenu();
			cartTitle();
			cartEmptyMessage();
		} else if (!isCartOpen && isFavoriteOpen) {
			openMenu();
			favoritesTitle();
			favoritesEmptyMessage();
		}
	}, [isCartOpen, isFavoriteOpen]);

	return (
		<MuiDrawer
			data-testid='menu-drawer'
			transitionDuration={theme.transitions.duration.short}
			variant='persistent'
			PaperProps={{
				sx: {
					p: '1rem',
					height: '100%',
					bottom: 0,
					top: '65px',
				},
			}}
			anchor='right'
			open={isOpen}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					width: { xs: '80vw', md: '30vw' },
					mb: '12rem',
				}}
				role='presentation'
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<ListItems
						onCloseMenuHandler={onCloseMenuHandler}
						title={title}
						emptyMessage={emptyMessage}
					/>
				</Box>
				<Box
					sx={{
						backgroundColor: theme.palette.common.white,
						position: 'fixed',
						bottom: 0,
						width: { xs: '80vw', md: '30vw' },
					}}
				>
					{isCartOpen && (
						<CartTotal onCloseMenuHandler={onCloseMenuHandler} />
					)}
				</Box>
			</Box>
		</MuiDrawer>
	);
}
