import React, { useEffect, useContext } from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import Login from "./auth/login/login";
import Register from "./auth/login/register";

import Header from "./shared/Header";


import Dashboard from "./dashboard/Dashboard";


import { ProtectedRoute } from "./shared/auth/ProtectedRoute";
import { LoggedInRoute } from "./shared/auth/LoggedInRoute";

function Root() {
	const auth = useContext(AuthContext);

	useEffect(() => {
		auth.checkAuthState();
	}, [auth]);

	return (
		<div className="mainApp">
			
			<BrowserRouter>
				<Header />

				<Switch>
					<Route exact path="/">
						{auth.isAuth ? (
							<Redirect to="/dashboard" />
						) : (
							<Redirect to="/login" />
						)}
					</Route>

				

					<Route exact path="/login" component={Login} />
					<LoggedInRoute
						exact
						path="/register"
						component={Register}
					/>

					<ProtectedRoute exact path="/dashboard">
						<Dashboard />
					</ProtectedRoute>
					
				</Switch>

				
			</BrowserRouter>
		</div>
	);
}

export default Root;
