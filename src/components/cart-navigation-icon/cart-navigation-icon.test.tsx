import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../shared/utils/test-utils';
import { CartNavigationIcon } from './cart-navigation-icon.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<CartNavigationIcon />);
	expect(asFragment()).toMatchSnapshot();
});

test('snapshot of the hover', () => {
	const { getByTestId, asFragment } = render(<CartNavigationIcon />);

	userEvent.hover(getByTestId(/cart-navigation-icon/i));

	expect(asFragment()).toMatchSnapshot();
});
