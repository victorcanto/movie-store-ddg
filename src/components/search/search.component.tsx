import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import {
	SearchContainer,
	SearchIconWrapper,
	StyledInputBase,
} from './search.styles';
import { setSearchParam, useAppDispatch } from '../../store';

export function Search() {
	const dispatch = useAppDispatch();

	const onSearchHandler = (e: any) => {
		dispatch(setSearchParam(e.target.value));
	};

	return (
		<SearchContainer>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				data-testid='search-input'
				placeholder='Procurar'
				onChange={onSearchHandler}
			/>
		</SearchContainer>
	);
}
