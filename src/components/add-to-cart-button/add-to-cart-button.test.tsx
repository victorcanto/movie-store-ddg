import React from 'react';
import { moviesMock } from '../../shared/mocks';
import { render } from '../../shared/utils/test-utils';
import { AddToCartButton } from './add-to-cart-button.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<AddToCartButton item={moviesMock[0]} />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<AddToCartButton item={moviesMock[0]} />);
	expect(getByTestId('add-to-cart-button')).toBeInTheDocument();
});
