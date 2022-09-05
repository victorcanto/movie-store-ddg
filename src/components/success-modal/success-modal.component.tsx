import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import {
	selectIsCompletePurchase,
	selectUserNameFromCheckout,
	setCartItems,
	setFavoriteItems,
	setIsCompletedPurchase,
	useAppDispatch,
	useAppSelector,
} from '../../store';
import { Button } from '../button/button.component';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	color: 'black',
	boxShadow: 3,
	p: 4,
};

export function SuccessModal() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const dispatch = useAppDispatch();

	const isCompletePurchase = useAppSelector(selectIsCompletePurchase);
	const userNameFromCheckout = useAppSelector(selectUserNameFromCheckout);

	const initialPageHandler = () => {
		dispatch(setCartItems([]));
		dispatch(setFavoriteItems([]));
		dispatch(setIsCompletedPurchase(false));
	};

	useEffect(() => {
		if (isCompletePurchase) {
			handleOpen();
		}
	}, [isCompletePurchase]);

	return (
		<div>
			<Modal
				data-testid='success-modal'
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography
						textAlign='center'
						id='modal-modal-title'
						variant='h3'
					>
						Obrigado
						<Typography textAlign='center' variant='h4'>
							{userNameFromCheckout}!
						</Typography>
					</Typography>
					<Typography
						id='modal-modal-description'
						sx={{ mt: 2, mb: 2, textAlign: 'center' }}
					>
						Sua compra foi realizada com sucesso!
					</Typography>
					<Button
						component={Link}
						to='/'
						onClick={initialPageHandler}
					>
						Ir para loja
					</Button>
				</Box>
			</Modal>
		</div>
	);
}
