import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { Button } from './button.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<Button />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<Button />);
	expect(getByTestId('button')).toBeInTheDocument();
});
