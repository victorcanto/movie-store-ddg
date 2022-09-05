import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { Card } from './card.component';
import { moviesMock } from '../../shared/mocks';

test('snapshot of the base state', () => {
	const { asFragment } = render(<Card item={moviesMock[0]} />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<Card item={moviesMock[0]} />);
	expect(getByTestId('card')).toBeInTheDocument();
});
