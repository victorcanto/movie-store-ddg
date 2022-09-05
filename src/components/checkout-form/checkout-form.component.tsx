import * as React from 'react';
import { Form, Formik } from 'formik';
import { Box, Grid } from '@mui/material';

import { TextField } from '../forms/text-field/text-field.component';
import { Select } from '../forms/select/select.component';

import { getBrazilianCitiesByState, getBrazilianStates } from '../../shared';
import { checkoutSchema } from '../../shared/schemas';
import {
	setIsCompletedPurchase,
	setUserNameFromCheckout,
	useAppDispatch,
} from '../../store';

export interface InitialFormValues {
	fullname: string;
	cpf: string;
	phone: string;
	email: string;
	cep: string;
	address: string;
	city: string;
	state: string;
}

const initialFormValues: InitialFormValues = {
	fullname: '',
	cpf: '',
	phone: '',
	email: '',
	cep: '',
	address: '',
	city: '',
	state: '',
};

export function CheckoutForm({
	bindSubmitCheckoutForm,
}: {
	bindSubmitCheckoutForm: Function;
}) {
	const dispatch = useAppDispatch();

	return (
		<Formik
			initialValues={initialFormValues}
			validationSchema={checkoutSchema}
			onSubmit={(values, actions) => {
				dispatch(setUserNameFromCheckout(values.fullname));
				dispatch(setIsCompletedPurchase(true));
			}}
		>
			{(props) => {
				const { handleSubmit } = props;
				bindSubmitCheckoutForm(handleSubmit);
				return (
					<Box
						sx={{
							height: '100%',
							width: '100%',
						}}
					>
						<Form data-testid='checkout-form'>
							<Grid container spacing={2} mb='2rem'>
								<Grid item xs={12}>
									<TextField
										name='fullname'
										label='Nome completo'
									/>
								</Grid>

								<Grid item xs={12} md={6}>
									<TextField
										name='cpf'
										label='CPF'
										inputMaskProps={{
											mask: '999.999.999-99',
											maskPlaceholder: '',
										}}
									/>
								</Grid>

								<Grid item xs={12} md={6}>
									<TextField
										name='phone'
										label='Telefone'
										inputMaskProps={{
											mask: '(99) 99999-9999',
										}}
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField name='email' label='Email' />
								</Grid>

								<Grid item xs={12} md={4}>
									<TextField
										name='cep'
										label='CEP'
										inputMaskProps={{ mask: '99.999-999' }}
									/>
								</Grid>

								<Grid item xs={12} md={8}>
									<TextField
										name='address'
										label='Endereço'
									/>
								</Grid>

								<Grid item xs={12} md={5}>
									<Select
										name='state'
										label='Estado'
										options={getBrazilianStates()}
									/>
								</Grid>

								<Grid item xs={12} md={7}>
									<Select
										disabled={!props.values.state.length}
										name='city'
										label='Cidade'
										options={
											getBrazilianCitiesByState(
												props.values.state,
											) as string[]
										}
									/>
								</Grid>
							</Grid>
						</Form>
					</Box>
				);
			}}
		</Formik>
	);
}
