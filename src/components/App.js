import React from "react";

import {Route, Link} from "react-router-dom";

import { connect } from "react-redux";

import { Button } from "@material-ui/core";

import Menu from "./Menu";
import Auth from "./Auth";
import Logo from "./Logo";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import HeroContent from "./HeroContent";
import DonationForm from "./DonationForm";
import DonateBtn from "./DonateBtn";

const App = (props) => {
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
				{props.isLogin ? <Dashboard /> : <Auth />}  
			</Route>
			<Route path="/donate" exact>
				{props.isLogin ? <DonationForm /> : <Auth />}
			</Route>
		</>
	);
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);