import React from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "../../../services/auth-service";

export function ProtectedRoute(props) {
	const { children, ...rest } = props;

	const onlyChild = React.Children.only(children);
	return (
		<Route
			{...rest}
			render={(props) =>
				authService.isAuthenticated() ? (
					React.cloneElement(onlyChild, { ...rest, ...props })
				) : (
					<Redirect to={{ pathname: "/" }} />
				)
			}
		/>
	);
}
