import { combineReducers } from "redux";

const login = (isLogin=false, action) => {
	if(action.type === "SIGNIN") {
		return true;
	} else if (isLogin === "SIGNOUT") {
		return false;
	}
	return false;
}

export default combineReducers({
	isLogin: login
});