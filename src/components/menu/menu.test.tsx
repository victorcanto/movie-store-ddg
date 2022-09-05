import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { Menu } from './menu.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<Menu />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<Menu />);
	expect(getByTestId('menu-drawer')).toBeInTheDocument();
});
