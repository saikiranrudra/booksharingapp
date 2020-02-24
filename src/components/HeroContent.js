import React from "react";

import {Typography, Button} from "@material-ui/core";

import { Link } from "react-router-dom";

const HeroContent = () => {
	return (
		<div 
			style={{
				textAlign: "center",
				position: "absolute",
				top: "45%",
				left: "50%",
				transform: "translate(-50%, -50%)"
			}}
		>
			<Typography variant="h2" align="center">
				An Online Book Sharing Platform
			</Typography>
			<Link to="/auth" style={{ textDecoration: "none", color: "inherit" }}>
				<Button 
					variant="contained" 
					style= {{ 
						marginTop: "1rem", 
						background: "linear-gradient(to right bottom, #8e2de2, #4a00e0)",
						color: "#eee" 
					}}
				>
					Let's Get Started
				</Button>
			</Link>
		</div>
	);
}

export default HeroContent;