import React, {useState} from "react";

import { TextField, Typography, Paper, makeStyles, Select, Button } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
	container: {
		display: "inline-block",
		position: "relative",
		//top: "50%",
		left: "50%",
		transform: "translateX(-50%)",
		padding: ".8rem 1rem",
		textAlign: "center",
		marginBottom: "3rem"		
	},
	title: {
		fontWeight: 300,
		margin: 0,
		padding: 0
	},
	
	input: {
		margin: theme.spacing(1),
		width: "95%",
		"&:last-child": {
			marginBottom: "1rem"
		}
	}
}));

const DonationForm = () => {
	const classes = useStyles();
	const [type, setType] = useState();
	
	const handleChange = (event) => {
		setType(event.target.value);
	}
	
	return (
		<Paper className={classes.container}>
			<br />
			<Typography variant="h3" className={classes.title}>Donation Form</Typography>
			<br />
			<TextField className={classes.input} required type="text" label="Book Name" />
			<br />
			<TextField className={classes.input} required type="text" label="Subject" />
			<br />
			<TextField className={classes.input} required type="text" label="Department" />
			<br />
			<TextField className={classes.input} required type="text" label="Author" />
			<br />
			<TextField className={classes.input} required type="file" label="Book Image" />
			<br />
			<TextField className={classes.input} required type="text" label="Tags" />
			<br />
			<Select
	          native
	          value={type}
	          onChange={handleChange}
	        >
	          <option value="none">Select Type</option>
	          <option value="book">Book</option>
	          <option value="notes">Notes</option>
	          <option value="hand written notes">Hand Written Notes</option>
	        </Select>
	        <br />
	        <Button 
	        	variant="contained" 
	        	style= {{ 
	        		color: "#eee",  
	        		background: "linear-gradient(to right bottom, #8e2de2, #4a00e0)",
	        		marginTop: "1rem" 
	        	}}
	        >
	        	Submit
	        </Button>
		</Paper>
	);
}

export default DonationForm;