import React,{ useState } from "react";

import { Paper, TextField, Button } from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";

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

const renderForm = (type = "signin", classes) => {
	if(type === "signin") {
		return (
			<>
				<TextField className={classes.input} required type="number" label="Enrollment No" />
				<br />
				<TextField className={classes.input} required type="password" label="Password" />
				<br />
				<Button  className={classes.btn} variant="co">Submit</Button>
			</>
		);
	} else if (type === "signup") {
		return (
			<>
				<TextField className={classes.input} required type="number" label="Enrollment No" />	
				<br />
				<Button  className={classes.btn} variant="contained">Submit</Button>
			</>
		);
	} 
}

const Auth = () => {
	const classes = useStyles();
	const [type, setType] = useState("signin");
	return (
		<Paper className={classes.container}>
			<Button className={classes.options} variant="contained" onClick={() => setType("signin")}>SignIn</Button>
			<Button className={classes.options} variant="contained" onClick={() => setType("signup")}>SignUp</Button>
			<br />
			{renderForm(type, classes)}
		</Paper>
	); 
} 

export default Auth;