import * as React from 'react';
import { CircularProgress, Box } from '@mui/material';

export function Loading() {
	return (
		<Box data-testid='loading' sx={{ display: 'flex' }}>
			<CircularProgress />
		</Box>
	);
}
