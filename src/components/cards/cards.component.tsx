import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Grid, Box } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { Movie } from '../../shared';

import { Card } from '../card/card.component';
import { Loading } from '../loading/loading.component';

export interface CardsProps {
	items: Movie[];
	fetchItems: () => void;
}

export function Cards({ items = [], fetchItems }: CardsProps) {
	const HAS_MORE = true;

	return (
		<Box
			data-testid='cards'
			sx={{
				flexGrow: 1,
				px: '1rem',
				pt: '3rem',
			}}
		>
			<InfiniteScroll
				style={{
					overflow: 'hidden',
				}}
				dataLength={items.length}
				next={fetchItems}
				hasMore={HAS_MORE}
				loader={
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							width: '100%',
							p: '2rem',
						}}
					>
						<Loading />
					</Box>
				}
			>
				<Grid
					overflow='none'
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{items.map((item) => (
						<Grid key={item.id} item xs={8} sm={4} md={3}>
							<Card item={item} />
						</Grid>
					))}
				</Grid>
			</InfiniteScroll>
		</Box>
	);
}
