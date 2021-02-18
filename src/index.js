import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { GlobalStyle } from './theme/GlobalStyle';
import App from './App';
import NavBar from './components/NavBar';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<NavBar />
		<App />
	</ThemeProvider>,

	document.getElementById('root')
);
