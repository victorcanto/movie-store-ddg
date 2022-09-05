import React from 'react';
import {
	BaseTextFieldProps,
	InputBaseProps,
	TextField as MuiTextField,
} from '@mui/material';
import { useField } from 'formik';
import InputMask from 'react-input-mask';

export interface TextFieldProps extends BaseTextFieldProps {
	name: string;
	inputMaskProps?: InputMask['props'];
}

export function TextField({
	name,
	inputMaskProps,
	...otherProps
}: TextFieldProps) {
	const [field, meta] = useField(name);

	const configTextField: any = {
		...field,
		...otherProps,
		fullWidth: true,
	};

	if (meta && meta.touched && meta.error) {
		configTextField.error = true;
		configTextField.helperText = meta.error;
	}
	return (
		<InputMask
			data-testid='text-field'
			{...inputMaskProps}
			{...configTextField}
		>
			<MuiTextField variant='outlined' />
		</InputMask>
	);
}
