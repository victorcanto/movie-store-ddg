import React from 'react';
import { useField, useFormikContext } from 'formik';
import { MenuItem, TextField } from '@mui/material';

export interface SelectProps {
	name: string;
	label: string;
	disabled?: boolean;
	options: string[];
}

export function Select({
	name,
	disabled,
	options = [],
	...otherProps
}: SelectProps) {
	const { setFieldValue } = useFormikContext();
	const [field, meta] = useField(name);

	const handleChange = (evt: any) => {
		const { value } = evt.target;
		setFieldValue(name, value);
	};

	const configSelect: any = {
		...field,
		...otherProps,
		select: true,
		fullWidth: true,
		onChange: handleChange,
	};

	if (meta && meta.touched && meta.error) {
		configSelect.error = true;
		configSelect.helperText = meta.error;
	}

	return (
		<TextField
			data-testid='select-field'
			disabled={disabled}
			{...configSelect}
			variant='outlined'
		>
			{options.map((item) => {
				return (
					<MenuItem key={item} value={item}>
						{item}
					</MenuItem>
				);
			})}
		</TextField>
	);
}
