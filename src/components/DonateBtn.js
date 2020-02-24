import React from "react";

import { Link } from "react-router-dom";
 
import { Button } from "@material-ui/core";
const DonateBtn = () => {
	return (
		<Link to="/donate">
			<Button 
				variant="contained" 
				style={{ 
					background: "linear-gradient(to right bottom, #8e2de2, #4a00e0)", 
					color: "#eee",
					marginLeft: "67%"
				}}
			>
			
				Donate	
			</Button>
		</Link>
	);
}

export default DonateBtn;