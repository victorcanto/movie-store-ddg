import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			light: '#fc3636',
			main: '#fc0404',
			dark: '#b00202',
		},
		secondary: {
			light: '#5b5b5b',
			main: '#333',
			dark: '#232323',
		},
	},
});

export { theme };
