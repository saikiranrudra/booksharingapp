import React from "react";

import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	search: {
		boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
		outline: "none",
		border: "none",
		fontSize: "1.2rem",
		padding: "1rem",
		display: "block",
		margin: "1rem auto"
	},
	bookImg: {
		boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
		borderRadius: "4px",
		width: "10rem",
		margin: "1rem"
	},
	container: {
		margin: "1rem auto",
		textAlign: "center"
	}
}));

const BookShow = () => {
	const classes = useStyles();
	let cards = [];
	for(let i = 0; i < 25; i++) {
		cards[i] = <img className={classes.bookImg} src="https://images-na.ssl-images-amazon.com/images/I/41DPq03IAOL._SY346_.jpg" />;
	}
	return (
		<>
			<input type="text" placeholder="Search Books..." className={classes.search}/>
			<div className={classes.container}>
				{cards}
			</div>
		</>
	);
}

export default BookShow;