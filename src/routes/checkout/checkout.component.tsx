import * as React from 'react';
import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ProtectedCheckoutRoute } from '../protected/protected.component';
import { CheckoutForm } from '../../components/checkout-form/checkout-form.component';
import { CheckoutItems } from '../../components/checkout-items/checkout-items.component';
import { Button } from '../../components/button/button.component';
import { SuccessModal } from '../../components/success-modal/success-modal.component';

export function Checkout() {
	let submitCheckoutForm: Function | null = null;

	const onSubmitCheckout = (evt: any): void => {
		if (submitCheckoutForm) {
			submitCheckoutForm(evt);
		}
	};

	const bindSubmitCheckoutForm = (submitForm: Function) => {
		submitCheckoutForm = submitForm;
	};

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));

	return (
		<ProtectedCheckoutRoute>
			<Box
				sx={{
					textAlign: { xs: 'center', md: 'left' },
					width: '100%',
					mt: { xs: '6rem', md: '10rem' },
					p: { xs: '1rem', md: '3rem' },
				}}
			>
				<SuccessModal />
				<Typography
					sx={{
						fontSize: {
							xs: '2rem',
							lg: '3rem',
						},
						mt: '-2rem',
						pb: '3rem',
					}}
				>
					Finalizar compra
				</Typography>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					direction={{ xs: 'column', md: 'row' }}
					justifyContent={{ xs: 'center', md: 'flex-end' }}
				>
					<Grid item xs={6}>
						<Item>
							<CheckoutForm
								bindSubmitCheckoutForm={bindSubmitCheckoutForm}
							/>
						</Item>
					</Grid>
					<Grid
						container
						item
						xs={6}
						direction='column'
						rowGap='2rem'
					>
						<Grid item>
							<Item sx={{ overflow: 'auto', maxHeight: 295 }}>
								<CheckoutItems />
							</Item>
						</Grid>
						<Grid item>
							<Button
								fullWidth
								onClick={onSubmitCheckout}
								type='submit'
								sx={{ padding: '1.3rem' }}
							>
								Finalizar
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</ProtectedCheckoutRoute>
	);
}
