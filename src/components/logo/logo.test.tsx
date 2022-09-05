import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { Logo } from './logo.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<Logo />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<Logo />);
	expect(getByTestId('logo-link')).toBeInTheDocument();
});
