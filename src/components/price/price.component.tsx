import * as React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { currency } from '../../shared/utils/currency.utils';

export interface PriceProps extends TypographyProps {
	value: number;
}

export function Price({ value }: PriceProps) {
	return <span data-testid='price'>{currency.format(value)}</span>;
}
