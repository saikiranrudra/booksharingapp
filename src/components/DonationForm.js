import React, {useState} from "react";

import { TextField, Typography, Paper, makeStyles, Select } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
	container: {
		display: "inline-block",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: ".8rem 1rem",
		textAlign: "center"
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
			<TextField className={classes.input} required type="text" label="Book Type" />
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
		</Paper>
	);
}

export default DonationForm;