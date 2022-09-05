import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../shared/utils/test-utils';
import { FavoriteNavigationIcon } from './favorite-navigation-icon.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<FavoriteNavigationIcon />);
	expect(asFragment()).toMatchSnapshot();
});

test('snapshot of the hover', () => {
	const { getByTestId, asFragment } = render(<FavoriteNavigationIcon />);

	userEvent.hover(getByTestId(/favorite-navigation-icon/i));

	expect(asFragment()).toMatchSnapshot();
});
