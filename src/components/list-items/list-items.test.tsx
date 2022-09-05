import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { ListItems, ListItemsProps } from './list-items.component';

const onCloseMenuHandlerMock = jest.fn();

const propsMock: ListItemsProps = {
	emptyMessage: 'empty test',
	title: 'test',
	onCloseMenuHandler: onCloseMenuHandlerMock,
};

test('snapshot of the base state', () => {
	const { asFragment } = render(<ListItems {...propsMock} />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<ListItems {...propsMock} />);
	expect(getByTestId('list-items')).toBeInTheDocument();
});
