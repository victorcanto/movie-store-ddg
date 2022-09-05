import * as React from 'react';
import { ButtonProps, Button as MuiButton, useTheme } from '@mui/material';

export function Button({
	children,
	onClick,
	disabled,
	component = '' as React.ElementType,
	to = '/',
	...restProps
}: ButtonProps & { component?: React.ElementType; to?: string }) {
	const theme = useTheme();
	return (
		<MuiButton
			data-testid='button'
			fullWidth
			component={component}
			to={to}
			variant='contained'
			onClick={onClick}
			disabled={disabled}
			{...restProps}
		>
			{children}
		</MuiButton>
	);
}
