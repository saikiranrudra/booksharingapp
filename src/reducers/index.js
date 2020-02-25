import { combineReducers } from "redux";

const login = (auth = { isSignIn: false, info: null }, action) => {
	if(action.type === "SIGNIN") {
		return {
			isSignIn: true,
			info: action.payload
		};
	} else if (action.type === "SIGNOUT") {
		return {
			isSignIn: false,
			info: null
		};
	}
	return auth;
}

export default combineReducers({
	auth: login
});