import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { Loading } from './loading.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<Loading />);
	expect(asFragment()).toMatchSnapshot();
});

test('should have in the document', () => {
	const { getByTestId } = render(<Loading />);
	expect(getByTestId('loading')).toBeInTheDocument();
});
