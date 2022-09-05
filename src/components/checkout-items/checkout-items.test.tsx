import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { CheckoutItems } from './checkout-items.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<CheckoutItems />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<CheckoutItems />);
	expect(getByTestId('checkout-items')).toBeInTheDocument();
});
