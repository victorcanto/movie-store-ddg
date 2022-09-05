import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Cards } from '../../components/cards/cards.component';
import { useMovies } from '../../shared/hooks';

export function Home() {
	const { results, refetch } = useMovies();

	return (
		<Box
			sx={{
				minHeight: '90vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				p: { xs: '4rem 4rem 0 4rem', md: '3rem 3rem 0 3rem' },
			}}
		>
			<Cards fetchItems={refetch} items={results} />
		</Box>
	);
}
