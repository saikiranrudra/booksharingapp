import React,{ useState } from "react";

import { Paper, TextField, Button, Typography } from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";

import { connect } from "react-redux";
import { signIn } from "./../actions"; 

import axios from "axios";

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
			margin: "1rem"
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
	const [credential, setCredential] = useState({
		enrollmentNo: "",
		password: ""
	})
	return (
		<Paper className={classes.container}>
			<Typography variant="h4" style={{ fontWeight: 400 }}>Sign In</Typography>
			<p>{props.auth.isSignIn ? "Sign in Successfully": null}</p>
			<TextField 
				className={classes.input} 
				required 
				value={credential.enrollmentNo}
				onChange={ e => setCredential({...credential, enrollmentNo: e.target.value}) } 
				type="text" 
				label="Enrollment No" 
			/>
			<br />
			<TextField 
				className={classes.input} 
				required 
				type="password" 
				label="Password"
				value={credential.password}
				onChange={e => setCredential({...credential, password: e.target.value})}  
			/>
			<br />
			<Button  
				className={classes.btn} 
				onClick={() => {
					if(credential.enrollmentNo && credential.password) {
						axios
						.post('https://fast-everglades-73327.herokuapp.com/api/v1/user/signin', {
						  email: credential.enrollmentNo,
						  password: credential.password,
						  crossDomain: true
						})
						.then(res => {
							props.signIn(res.data);
						})
						.catch(err => console.error(err));	
					}
					
				}} 
				variant="contained"
			>
				Submit
			</Button>
		</Paper>
	); 
} 

const mapStateTopProps = (state) => {
	return state;	
}

export default connect(mapStateTopProps, { signIn })(Auth);