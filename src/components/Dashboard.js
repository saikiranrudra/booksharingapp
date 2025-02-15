import React from "react";

import {Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

import DropDownDisplay from "./DropDownDisplay";
import Transections from "./Transections"

import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
	container: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, 2rem)",
		gridTemplateRows: "repeat(auto-fill, 2rem)",
		gridAutoRows: "2rem",
		padding: "1rem .5rem",
		gridGap: ".5rem",
		width: "100%",
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
		gridColumn: "8/18",
		gridRow: "1/8",
		alignItems: "center",
		padding: "0.9rem",
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
		},
		"& > p": {
			padding: "1rem 0"
		},
		display: "grid",
		gridTemplateRows: "2rem 2rem 2rem 1fr",
		gridTemplateColumns: "1fr 2.5rem"
	},
	about: {
		gridColumn: "1/18",
		gridRow: "8/14",	
		"& > h2": {
			fontSize: "1.2rem",
			fontWeight: 700,
			margin: "1rem 1.8rem",
			color: "#8395a7",
		}
	},
	booksTransection: {
		gridColumn: "18 / -1",
		gridRow: "1/14"
	}
}));

const Dashboard = (props) => {
	const classes = useStyles(); 
	return(
		<div className={classes.container}>
			{console.log(props)}
			<Paper className={classes.imageContainer}>
				<img className={classes.image} src="https://pbs.twimg.com/profile_images/969073897189523456/rSuiu_Hr.jpg" />
			</Paper>
			<Paper className={classes.info}>
				<Typography variant="h3">{props.auth.info.data.name}</Typography>
				<Typography variant="subtitle1">{props.auth.info.data.userType}</Typography>
				<Paper className={classes.needScore} style={{ gridColumn: "2/3", gridRow: "1/2" }}>{props.auth.info.data.needScore}</Paper>
				<Typography variant="body1" style={{gridColumn: "1/-1", gridRow: "3/5"}}>
					{props.auth.info.data.description ? props.auth.info.data.description : "nothing defined"}
				</Typography>
			</Paper>
			<Paper className={classes.about}>
				<Typography variant="h2">ABOUT</Typography>
				<DropDownDisplay info={props.auth.info.data} />
			</Paper>
			<Paper className={classes.booksTransection}>
				<Transections />
			</Paper>
		</div>
	);	
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Dashboard);