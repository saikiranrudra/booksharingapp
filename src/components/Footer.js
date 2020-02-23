import React from "react";

import {Paper, Typography} from "@material-ui/core";

const Footer = () => {
	return (
		<Paper style={{
				position: "absolute",
				bottom: 0,
				width: "100%",
				textAlign: "center",
				padding: ".3rem",
				borderRadius: 0
			}}
		>
			<Typography align="center" variant="body1">Made with 👨‍💻 and ☕ by Decoders</Typography>
		</Paper>
	);
}

export default Footer;