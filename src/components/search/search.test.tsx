import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { Search } from './search.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<Search />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<Search />);
	expect(getByTestId('search-input')).toBeInTheDocument();
});
