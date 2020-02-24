// react libraries
import React,{Fragment} from "react";
import ReactDom from "react-dom";

// routing libraries
import {BrowserRouter as Router} from 'react-router-dom';

// material ui libraries
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

// redux libraries
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// own libraries
import App from "./components/App";
import reducers from "./reducers";

const theme =  createMuiTheme({
    palette: {
      type: "dark"
    }
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render(
	<Fragment>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<Router>
				<Provider store={store}>
					<App />
				</Provider>	
			</Router>
		</ThemeProvider>
	</Fragment>,
	document.getElementById('root')
)