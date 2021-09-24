import React, { createContext, useState } from "react";
import authService from "../services/auth-service";
import * as actions from "../components/auth/login/actions";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [isAuth, setState] = useState(false);
	const [error, setError] = useState("");

	const checkAuthState = (e) => {
		if (authService.isAuthenticated()) {
			setState(true);
		}
	};

	const isAuthenticated = () => {
		return authService.isAuthenticated();
	};

	const signOut = () => {
		authService.invalidateUser();
		setState(false);
		setError("");
	};

	const signIn = (loginData) => {
		return actions
			.login(loginData)
			.then((token) => {
				authService.saveToken(token);
				setState(true);

				return token;
			})
			.catch((err) => setError("Email or Password is Incorrect !"));
	};

	const authAPI = {
		checkAuthState,
		signOut,
		signIn,
		isAuth,
		error,
		isAuthenticated,
	};

	return (
		<AuthContext.Provider value={authAPI}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
