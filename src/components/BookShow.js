import React, {useEffect, useState} from "react";

import { makeStyles, Button } from "@material-ui/core";

import axios from "axios";

const useStyles = makeStyles(theme => ({
	search: {
		boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
		outline: "none",
		border: "none",
		fontSize: "1.2rem",
		padding: "1rem"
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
	},
	Btn: {
		marginLeft: "1rem"
	},
	searchContainer: {
		display: "inline-block",
		margin: "1rem auto",
		position: "relative",
		left: "50%",
		transform: "translateX(-50%)"
	}
}));


const BookShow = () => {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [search, setSearch] = useState("");
	// for(let i = 0; i < 25; i++) {
	// 	cards[i] = <img key={i} className={classes.bookImg} src="https://images-na.ssl-images-amazon.com/images/I/41DPq03IAOL._SY346_.jpg" />;
	// }
	useEffect(() => {
		axios.get("https://fast-everglades-73327.herokuapp.com/api/v1/book")
		.then(res => setData(res.data.data.book))
		.catch(err => console.log(err));
	}, []);

	const handleSearch = (event) => {
		setSearch(event.target.value);
	}

	const handleSearchBar = () => {
		axios.post("https://fast-everglades-73327.herokuapp.com/api/v1/book/search",{ search })
		.then(res => setData(res.data.data.book))
		.catch(err => console.log(err));
	}

	return (
		<>
			<div className={classes.searchContainer}>
				<input type="text" placeholder="Search Books..." value={search} onChange={handleSearch} className={classes.search}/>
				<Button
					className={classes.Btn} 
					style={{
						background: "linear-gradient(to right bottom, #8e2de2, #4a00e0)",
						display: "inline-block"
					}}
					onClick={handleSearchBar}
				>
					Submit
				</Button>
			</div>
			<div className={classes.container}>
			{	data.length !== 0 ?
				data.map((el, index) => <img className={classes.bookImg} src={el.bookImage} key={index} />) :

				<p>No Book Found on This Search</p>
			}
			</div>
		</>
	);
}

export default BookShow;