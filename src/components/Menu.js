import React, {useState} from "react";

import {Link} from "react-router-dom";

import { Paper } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles } from "@material-ui/core/styles";
import {Motion, spring} from "react-motion";

const useStyles = makeStyles(theme => ({
	menu: {
		display: "inline-block",
		position: "fixed",
		padding: theme.spacing(1),
		borderRadius: "100%",
		width: "3.5rem",
		height: "3.5rem",
		right: "0.94rem",
		top: "0.91rem",
		zIndex: 2000,
		cursor: "pointer",

		touchCallout: "none",
	    userSelect: "none",
		tapHighlightColor: "transparent"
	},
	menuBar: {
		position: "relative",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		width: "2.4rem",
		height: "2.4rem",
	},
	menuBack: {
		display: "inline-block",
		position: "fixed",
		borderRadius: "100%",
		right: "1rem",
		top: "1rem",
		width: "3.4rem",
		height: "3.4rem",
		background: "linear-gradient(to right bottom, #8e2de2, #4a00e0)",
		backgroundPosition: "left center",
		zIndex: 1000,
        transition: "all 500ms cubic-bezier(0.165, 0.840, 0.440, 1.000)"
	},
	text: {
		position: "fixed",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%) scale(1)",
		zIndex: 1500,
		listStyleType: "none",
		padding: 0,
		margin: 0,
		["@media (max-width: 547px)"]: {
				width: "18rem",
				left: 0
		},
		"& > *": {
			cursor: "pointer",
			margin: "1rem 0",
			fontSize: "1.5rem",
			padding: "1rem 5rem",
			textAlign: "center",
			textTransform: "uppercase",
			transitionProperty: "background",
			transitionDuration: ".1s",
			transitionTimingFunction: "cubic-bezier(.17,.67,.85,.54)",
			"&:hover": {
				background: "#eee",
				color: "#2d3436"
			},
		} 
	},
	link: {
		textDecoration: "none",
		color: "inherit",
		"&, &:link ,&:visited ,&:hover ,&:focus ,&:active": {
	    	color: "inherit",
		    textDecoration: "none"
		}
	}

}));
	
const Menu = () => {
	const classes = useStyles();
	const menuStyleDefault = {
		scale: 1,
		color: 0,
		mover: -1
	};
	const [isOpen, setIsOpen] = useState(1);
	const menuStyle = {
		scale: isOpen ? spring(1) : spring(80),
		color: isOpen ? spring(0) : spring(1),
		mover: isOpen ? spring(-1) : spring(1)
	};

	const handleMenuLinks = () => {
		setIsOpen(1);
	}

	return (
		<React.Fragment>
			<Paper 
				className={classes.menu} 
				onClick={() => {
					isOpen ? setIsOpen(0) : setIsOpen(1);
				}}
			>
				<MenuIcon className={classes.menuBar}/>
			</Paper>
			<Motion
					defaultStyle={menuStyleDefault}
					style={menuStyle}
			>
				
				{(values) => (
					<React.Fragment>
						<div 
							className={classes.menuBack} 
							style={{
								transform: `scale(${values.scale})`,
							}}
						>
						</div>
						{values.color === 0 ? null : <ul 
							className={classes.text}
							style= {{
								color: `rgba(235, 235, 235, ${values.color})`,	
								left: `${values.mover*50}%`,
							}}
						>
							<li><Link className={classes.link} onClick={handleMenuLinks} to="/">Home</Link></li>
							<li><Link className={classes.link} onClick={handleMenuLinks} to="/dashboard">Dashboard</Link></li>
							<li>Favourite</li>
							<li><Link className={classes.link} onClick={handleMenuLinks} to="/auth">Sign In</Link></li>
						</ul>}
					</React.Fragment>
				)}
	 		</Motion>
 		</React.Fragment>
	);
};

export default Menu;