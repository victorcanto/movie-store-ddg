import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Tooltip, Typography } from '@mui/material';
import logoSvg from '../../assets/logo.svg';

export function Logo() {
	return (
		<Tooltip title='Página inical do Movie Store'>
			<Link data-testid='logo-link' component={RouterLink} to='/'>
				<img width='50px' src={logoSvg} alt='logo' />
			</Link>
		</Tooltip>
	);
}
