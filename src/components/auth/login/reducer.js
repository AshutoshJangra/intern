export const AuthReducer = (state, action) => {
	console.log("in reducer");
	switch (action.type) {
		case "LOGIN_SUCCESS":
			return Object.assign({}, state, { isAuth: true });
		case "LOGOUT":
			return Object.assign({}, state, { isAuth: false });
		default:
			return state;
	}
};
