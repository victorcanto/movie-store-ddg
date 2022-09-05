import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { ListItem, ListItemProps } from './list-item.component';

const propsMock: ListItemProps = {
	item: {
		id: 1,
		poster_path: 'test',
		price: 79.99,
		title: 'test',
		quantity: 1,
	},
	removeItem: jest.fn(),
};

test('snapshot of the base state', () => {
	const { asFragment } = render(<ListItem {...propsMock} />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<ListItem {...propsMock} />);
	expect(getByTestId('list-item')).toBeInTheDocument();
});
