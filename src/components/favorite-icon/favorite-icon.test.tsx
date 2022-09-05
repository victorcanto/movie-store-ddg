import React from 'react';
import { moviesMock } from '../../shared/mocks';
import { render } from '../../shared/utils/test-utils';
import { FavoriteIcon } from './favorite-icon.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<FavoriteIcon item={moviesMock[0]} />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<FavoriteIcon item={moviesMock[0]} />);
	expect(getByTestId('favorite-icon')).toBeInTheDocument();
});
