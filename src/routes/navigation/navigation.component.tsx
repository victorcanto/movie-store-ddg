import * as React from 'react';
import { Outlet } from 'react-router-dom';
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	MenuItem,
	Menu,
	useTheme,
} from '@mui/material';

import {
	CartNavigationIcon,
	FavoriteNavigationIcon,
	Logo,
	Search,
	MoreIcon,
} from '../../components';

export function Navigation() {
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		React.useState<null | HTMLElement>(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const mobileMenuId = 'primary-search-account-menu-mobile';

	const theme = useTheme();

	const renderMobileMenu = (
		<Menu
			MenuListProps={{
				sx: {
					width: 'auto',
					backgroundColor: theme.palette.secondary.light,
				},
			}}
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton
					size='large'
					aria-label='favorites'
					sx={{ color: 'white' }}
				>
					<FavoriteNavigationIcon />
				</IconButton>
			</MenuItem>
			<MenuItem>
				<IconButton
					size='large'
					aria-label='cart'
					sx={{ color: 'white' }}
				>
					<CartNavigationIcon />
				</IconButton>
			</MenuItem>
		</Menu>
	);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='fixed'>
					<Toolbar sx={{ justifyContent: 'space-between' }}>
						<IconButton
							size='small'
							edge='start'
							color='inherit'
							aria-label='initial page'
						>
							<Logo />
						</IconButton>
						<Search />
						<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
							<IconButton
								size='large'
								aria-label='favorites'
								color='inherit'
							>
								<FavoriteNavigationIcon />
							</IconButton>
							<IconButton
								sx={{ display: { xs: 'none', sm: 'flex' } }}
								size='large'
								aria-label='cart'
								color='inherit'
							>
								<CartNavigationIcon />
							</IconButton>
						</Box>
						<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
							<IconButton
								size='large'
								aria-label='show more'
								aria-controls={mobileMenuId}
								aria-haspopup='true'
								onClick={handleMobileMenuOpen}
								color='inherit'
							>
								<MoreIcon />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
				{renderMobileMenu}
			</Box>
			<Outlet />
		</>
	);
}
