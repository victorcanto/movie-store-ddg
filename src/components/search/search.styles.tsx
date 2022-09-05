import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';

export const SearchContainer = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.3),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.5),
	},
	marginRight: 0,
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		width: '100%',
		maxWidth: '600px',
	},
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'&.MuiInputBase-root': {
		width: '100%',
	},
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
	},
}));
