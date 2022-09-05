import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { CartTotal } from './cart-total.component';
import { moviesMock } from '../../shared/mocks';

test('snapshot of the base state', () => {
	const mockCallback = jest.fn();
	const { asFragment } = render(
		<CartTotal onCloseMenuHandler={mockCallback} />,
	);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const mockCallback = jest.fn();
	const { getByTestId } = render(
		<CartTotal onCloseMenuHandler={mockCallback} />,
	);
	expect(getByTestId('cart-total')).toBeInTheDocument();
});
