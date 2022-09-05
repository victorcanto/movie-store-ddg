import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { Cards } from './cards.component';
import { moviesMock } from '../../shared/mocks';

test('snapshot of the base state', () => {
	const fetchItemsMock = jest.fn();
	const { asFragment } = render(
		<Cards fetchItems={fetchItemsMock} items={moviesMock} />,
	);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const fetchItemsMock = jest.fn();
	const { getByTestId } = render(
		<Cards fetchItems={fetchItemsMock} items={moviesMock} />,
	);
	expect(getByTestId('cards')).toBeInTheDocument();
});
