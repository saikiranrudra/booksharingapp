import React from "react";

import {Route, Link} from "react-router-dom";

import { Button } from "@material-ui/core";

import Menu from "./Menu";
import Auth from "./Auth";
import Logo from "./Logo";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import HeroContent from "./HeroContent";
import DonationForm from "./DonationForm";
import DonateBtn from "./DonateBtn";

const App = () => {
	return (
		<>
			<Route path="/">
				<Logo />
				<DonateBtn />	
				<Menu />
				<Footer />
			</Route>
			<Route path="/" exact>
				<HeroContent />
			</Route>
			<Route path="/auth" exact>
				<Auth />
			</Route>
			<Route path="/dashboard" exact>
				<Dashboard />
			</Route>
			<Route path="/donate" exact>
				<DonationForm />
			</Route>
		</>
	);
}

export default App;