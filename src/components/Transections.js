import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    width: "100%",
    zIndex: 2
  }
}));

const Transection = () => {

	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = index => {
		setValue(index);
	};

	return (
		<div className={classes.root}>
		    <AppBar position="static" color="default">
		        <Tabs
		          value={value}
		          onChange={handleChange}
		          indicatorColor="primary"
		          textColor="primary"
		          variant="fullWidth"
		          aria-label="Transections"
		        >
		          <Tab label="Donations" {...a11yProps(0)} />
		          <Tab label="Got in Donation" {...a11yProps(1)} />
		          <Tab label="Notifications (0)" {...a11yProps(1)} />	
		        </Tabs>
		    </AppBar>
		    <SwipeableViews
		        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
		        index={value}
		        onChangeIndex={handleChangeIndex}
		    >
	        <TabPanel value={value} index={0} dir={theme.direction}>
	          Donated
	        </TabPanel>
	        <TabPanel value={value} index={1} dir={theme.direction}>
	          Got in Donation
	        </TabPanel>
	        <TabPanel value={value} index={2} dir={theme.direction}>
	          There is no Notifications to show right now
	        </TabPanel>
      		</SwipeableViews>
    	</div>
	);
}

export default Transection;