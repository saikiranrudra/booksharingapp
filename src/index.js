import React,{Fragment} from "react";
import ReactDom from "react-dom";

import {BrowserRouter as Router} from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./components/App";

const theme =  createMuiTheme({
    palette: {
      type: "dark"
    }
});

ReactDom.render(
	<Fragment>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</Fragment>,
	document.getElementById('root')
)