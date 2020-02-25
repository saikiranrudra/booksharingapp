import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const DropDownDisplay = ({info}) => {
	return(

		<>
			
			<ExpansionPanel>
		        <ExpansionPanelSummary
		          expandIcon={<ExpandMoreIcon />}
		          aria-controls="panel1a-content"
		          id="panel1a-header"
		        >
		          <Typography >Academics</Typography>
		        </ExpansionPanelSummary>
		        <ExpansionPanelDetails>
		          	<Typography>
			            {info.semester ? `${info.semester} sem ${info.branch}`  : "nothing defined" }
		          	</Typography>
		        </ExpansionPanelDetails>  	
		    </ExpansionPanel>
		  	
		  	<ExpansionPanel>
		        <ExpansionPanelSummary
		          expandIcon={<ExpandMoreIcon />}
		          aria-controls="panel2a-content"
		          id="panel2a-header"
		        >
		      	<Typography>Income Status</Typography>
		        </ExpansionPanelSummary>
		        <ExpansionPanelDetails>
		          <Typography>
		            {info.income ? info.income : "nothing defined" }
		          </Typography>
		        </ExpansionPanelDetails>
		  	</ExpansionPanel>

		  	<ExpansionPanel>
		        <ExpansionPanelSummary
		          expandIcon={<ExpandMoreIcon />}
		          aria-controls="panel2a-content"
		          id="panel2a-header"
		        >
		      	<Typography>Previous Year Score</Typography>
		        </ExpansionPanelSummary>
		        <ExpansionPanelDetails>
		          <Typography>
		          	{info.acdamicScore ? info.acdamicScore : "nothing defined" }
		          </Typography>
		        </ExpansionPanelDetails>
		  	</ExpansionPanel>
    	</>
	);
}

export default DropDownDisplay;