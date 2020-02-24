import React, {useState} from "react";

import { TextField, Typography, Paper, makeStyles, Select, Button } from "@material-ui/core";

import { connect } from "react-redux";

import axios from "axios";



const useStyles = makeStyles( theme => ({
	container: {
		display: "inline-block",
		position: "relative",
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
	const [formData, setFormData] = useState({
		bookName: "",
		subject: "",
		department: "",
		author: "",
		file: "",
		tags: ""
	});

	const handleChange = (event) => {
		setType(event.target.value);
		
	}

	const handleForm = (event) => {
		event.preventDefault();
		  //formData: form data
		  //type: book type 
		  // axios
		  //   .post('https://fast-everglades-73327.herokuapp.com/api/v1/book', {
		      
		  //   })
		  //   .then(res => showOutput(res))
		  //   .catch(err => console.error(err))
	} 
	
	return (
		<Paper className={classes.container}>
			
			<form onSubmit={handleForm}>	
				<Typography variant="h3" className={classes.title}>Donation Form</Typography>
				<br />
				<TextField 
					className={classes.input} 
					value={formData.bookName} 
					required 
					type="text" 
					label="Book Name" 
					onChange={e => {

						setFormData({ ...formData, bookName: e.target.value })
					}}
				/>
				<br />
				<TextField 
					className={classes.input} 
					required 
					type="text" 
					label="Subject" 
					value={formData.subject}
					onChange={e => setFormData({...formData, subject: e.target.value})}
				/>
				<br />
				<TextField 
					className={classes.input} 
					required type="text" l
					label="Department"
					value={formData.department}
					onChange={e => setFormData({...formData, department: e.target.value})}
				/>
				<br />
				<TextField 
					className={classes.input} 
					required 
					type="text" 
					label="Author"
					value={formData.author}
					onChange={e => setFormData({...formData, author: e.target.value})} 
				/>
				<br />
				<TextField 
					className={classes.input} 
					required type="file" 
					name="file"
					value={formData.file} 
					label="Book Image" 
					onChange={e => setFormData({...formData, file: e.target.value})}
				/>
				<br />
				<TextField 
					className={classes.input} 
					required 
					type="text" 
					label="Tags" 
					value={formData.tags}
					onChange={e => setFormData({...formData, tags: e.target.value})}
				/>
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
		        	type="submit"
		        	style= {{ 
		        		color: "#eee",  
		        		background: "linear-gradient(to right bottom, #8e2de2, #4a00e0)",
		        		marginTop: "1rem" 
		        	}}
		        >
		        	Submit
		        </Button>
		    </form>    
		</Paper>
	);
}

const mapStateToProps = (state) => state; 
export default connect(mapStateToProps)(DonationForm);