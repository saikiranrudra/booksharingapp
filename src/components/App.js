import React from "react";

import {Route, Link} from "react-router-dom";

import { connect } from "react-redux";

import { Button } from "@material-ui/core";

import Menu from "./Menu";
import Auth from "./Auth";
import Logo from "./Logo";
import Dashboard from "./Dashboard";
import HeroContent from "./HeroContent";
import DonationForm from "./DonationForm";
import DonateBtn from "./DonateBtn";
import BookShow from "./BookShow";
import BookDetail from "./BookDetail";

const App = (props) => {
	return (
		<>
			<Route path="/">
				<Logo />
				<DonateBtn />	
				<Menu />
			</Route>
			<Route path="/" exact>
				<HeroContent />
			</Route>
			<Route path="/auth" exact>
				<Auth />
			</Route>	
			<Route path="/dashboard" exact>
				{props.auth.isSignIn ? <Dashboard /> : <Auth />}  
			</Route>
			<Route path="/donate" exact>
				{props.auth.isSignIn ? <DonationForm /> : <Auth />}
			</Route>
			<Route path="/explore" exact>
				<BookShow />
			</Route>
			<Route path="/explore/bookdetail">
				<BookDetail />
			</Route>
		</>
	);
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);