exports.signIn = () => {
	return {
		type: "SIGNIN"
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