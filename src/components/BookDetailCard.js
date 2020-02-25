import React from "react";


import {makeStyles, Paper, Typography} from "@material-ui/core";


const useStyles = makeStyles(theme => ({

	container: {
		display: "grid",
		gridTemplateColumns: "9rem 15rem",
		gridGap: "1rem",
		margin: "1rem auto",
		width: "80%"
	},
	img: {
		boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
		borderRadius: "4px",
		width: "9rem"
	},
	info: {
		justifySelf: "baseline",
		padding: theme.spacing(2),
		fontWeight: 300
	},
	title: {
		fontWeight: 500,
		color: "red"
	}
}))


const BookDetailsCard = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div>
				<img className={classes.img} src="https://images-na.ssl-images-amazon.com/images/I/41DPq03IAOL._SY346_.jpg" />
			</div>

			<Paper className={classes.info}>
				<Typography variant="h6"><span className={classes.title}>Book Name:</span> let us C</Typography>
				<Typography variant="h6"><span className={classes.title}>Department:</span> CSE</Typography> 
				<Typography variant="h6"><span className={classes.title}>Subject:</span> C Programming</Typography>
				<Typography variant="h6"><span className={classes.title}>Author:</span> Saikiran Rudra</Typography>
				<Typography variant="h6"><span className={classes.title}>Upload Date:</span> 1/1/2001</Typography>
				<Typography variant="h6"><span className={classes.title}>Book Type:</span> Notes</Typography>
				<Typography variant="h6"><span className={classes.title}>Tags:</span> Programming C</Typography>
			</Paper>
			
		</div>
	);
}

export default BookDetailsCard;