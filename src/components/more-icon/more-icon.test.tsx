import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { MoreIcon } from './more-icon.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<MoreIcon />);
	expect(asFragment()).toMatchSnapshot();
});
