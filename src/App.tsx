import * as React from 'react';
import { GlobalStyles, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { theme } from './styles/theme';

function App() {
	const inputGlobalStyles = (
		<GlobalStyles
			styles={{
				body: {
					backgroundColor: theme.palette.secondary.dark,
					color: theme.palette.common.white,
				},
			}}
		/>
	);

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{inputGlobalStyles}
				<AppRoutes />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
