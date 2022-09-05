import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { StarIcon } from './star-icon.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<StarIcon />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<StarIcon />);
	expect(getByTestId('star-icon')).toBeInTheDocument();
});
