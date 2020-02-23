import React from "react";

import {Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

import DropDownDisplay from "./DropDownDisplay";

const useStyles = makeStyles(theme => ({
	container: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, 2rem)",
		gridTemplateRows: "repeat(auto-fill, 2rem)",
		gridAutoRows: "2rem",
		margin: theme.spacing(2)
	},
	imageContainer: {
		display: "inline-block",
		gridColumn: "1/8",
		gridRow: "1/8"
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: "4px"
	},
	info: {
		gridColumn: "10/15",
		gridRow: "1/8",
		alignItems: "center",
		justifySelf: "flex-start",
		"& > h3": {
			fontSize: "1.7rem",
			fontWeight: "300"
		},
		"& > h6": {
			fontWeight: 500,
			fontSize: "1.2rem",
			letterSpacing: ".1rem"
		},
		"& > div": {
			backgroundColor: "#2ecc71",
			display: "inline-block",
			backgroundColor: "#2ecc71",
			padding: ".4rem .6rem",
			fontSize: "1rem",
			fontWeight: 500,
			color: "#eee"

		}
	},
	bio: {
		gridColumn: "1/18",
		gridRow: "9/19",	
		"& > h2": {
			fontSize: "1.2rem",
			fontWeight: 700,
			margin: "1rem 1.8rem",
			color: "#8395a7",
		}
	}
}));

const Dashboard = () => {
	const classes = useStyles();
	return(
		<div className={classes.container}>
			<Paper className={classes.imageContainer}>
				<img className={classes.image} src="https://pbs.twimg.com/profile_images/969073897189523456/rSuiu_Hr.jpg" />
			</Paper>
			<div className={classes.info}>
				<Typography variant="h3">Albert Nicola</Typography>
				<Typography variant="subtitle1">Student</Typography>
				<Paper className={classes.needScore}>4.2</Paper>
			</div>
			<Paper className={classes.bio}>
				<Typography variant="h2">ABOUT</Typography>
				<DropDownDisplay />
			</Paper>
		</div>
	);	
}

export default Dashboard;