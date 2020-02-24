import React from "react";

import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom"; 

const Logo = () => {
	return (
		<Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
			<Typography variant="h1" style={{fontSize: "220%", margin: "1rem", display: "inline-block"}}>
				BookShare.io
			</Typography>
		</Link>
	);
}

export default Logo;