import React from "react";

import {Route} from "react-router-dom";

import Menu from "./Menu";
import Auth from "./Auth";
import Logo from "./Logo";
import Dashboard from "./Dashboard";

const App = () => {
	return (
		<>
			<Route path="/">
				<Logo />
				<Menu />
			</Route>
			<Route path="/auth" exact>
				<Auth />
			</Route>
			<Route path="/dashboard" exact>
				<Dashboard />
			</Route>
		</>
	);
}

export default App;