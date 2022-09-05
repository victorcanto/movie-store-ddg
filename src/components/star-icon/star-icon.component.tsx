import * as React from 'react';
import { Star as MuiStarIcon } from '@mui/icons-material';
import { Badge, Tooltip } from '@mui/material';

export function StarIcon() {
	return (
		<Tooltip title='Número de votos' data-testid='star-icon'>
			<MuiStarIcon
				data-testid='star-icon'
				sx={{ fill: 'yellow' }}
				fontSize='large'
			/>
		</Tooltip>
	);
}
