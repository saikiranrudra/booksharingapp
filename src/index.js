import React,{Fragment} from "react";
import ReactDom from "react-dom";

import {BrowserRouter as Router} from 'react-router-dom';

import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./components/App";

ReactDom.render(
	<Fragment>
		<CssBaseline />
		<Router>
			<App />
		</Router>
	</Fragment>,
	document.getElementById('root')
)