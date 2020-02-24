import React,{ useState } from "react";

import { Paper, TextField, Button, Typography } from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";

import { connect } from "react-redux";
import { signIn } from "./../actions"; 

const useStyles = makeStyles( theme => ({
	container: {
		position: "absolute",
		top: "50%",
		left: "50%",
		display: "inline-block",
		transform: "translate(-50%, -50%)",
		padding: theme.spacing(2),
		["@media(max-width: 457px)"]: {
			width: "95%",
			margin: "rem"
		}
	},
	input: {
		display: "inline-block",
		margin: theme.spacing(1),
	},
	btn: {
		margin: theme.spacing(1.8),
		background: "linear-gradient(to right bottom, #8e2de2, #4a00e0)",
		color: "#eee"
	},
	options: {
		margin: theme.spacing(1)
	}
}))

const Auth = (props) => {
	const classes = useStyles();
	return (
		<Paper className={classes.container}>
			<Typography variant="h4" style={{ fontWeight: 400 }}>Sign In</Typography>
			<TextField className={classes.input} required type="text" label="Enrollment No" />
			<br />
			<TextField className={classes.input} required type="password" label="Password" />
			<br />
			<Button  className={classes.btn} onClick={() => props.signIn() } variant="contained">Submit</Button>
		</Paper>
	); 
} 

const mapStateTopProps = (state) => {
	return state;	
}

export default connect(mapStateTopProps, { signIn })(Auth);