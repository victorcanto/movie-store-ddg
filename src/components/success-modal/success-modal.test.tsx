import React from 'react';
import { render } from '../../shared/utils/test-utils';
import { SuccessModal } from './success-modal.component';

test('snapshot of the base state', () => {
	const { asFragment } = render(<SuccessModal />);
	expect(asFragment()).toMatchSnapshot();
});
