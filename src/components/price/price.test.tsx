import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { Price } from './price.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<Price value={0} />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId, getByText } = render(<Price value={0} />);
	expect(getByTestId('price')).toBeInTheDocument();
	expect(getByText('R$0.00')).toBeInTheDocument();
});
