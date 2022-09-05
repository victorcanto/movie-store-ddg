import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { CheckoutForm } from './checkout-form.component';

test('snapshot of the base state', () => {
	const mockCallback = jest.fn();
	const { asFragment } = render(
		<CheckoutForm bindSubmitCheckoutForm={mockCallback} />,
	);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const mockCallback = jest.fn();
	const { getByTestId } = render(
		<CheckoutForm bindSubmitCheckoutForm={mockCallback} />,
	);
	expect(getByTestId('checkout-form')).toBeInTheDocument();
});
