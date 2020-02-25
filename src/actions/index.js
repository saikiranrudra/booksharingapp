exports.signIn = (info) => {
	return {
		type: "SIGNIN",
		payload: info
	}
}

exports.signOut = () => {
	return {
		type: "SIGNOUT"
	}
}

exports.donation = (data) => {
	return {
		type: "MAKE_DONATION",
		payload: data
	}
}