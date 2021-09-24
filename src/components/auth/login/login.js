import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import '../../../App.css';

const Login = () => {
	const { isAuth, error, signIn } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		signIn({ email, password });
	};

	if (isAuth) {
		return <Redirect to={{ pathname: "/dashboard" }} />;
	}

	return (
		<section className="login_section">
			<form className="login_section_form" onSubmit={handleSubmit}>
				<h2 className="login_section_form_title">
					Welcome To Intern
				</h2>
				<input
					type="text"
					placeholder="Email"
					className="login_section_form_input"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<input
					type="password"
					placeholder="Password"
					className="login_section_form_input"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<input
					className="login_section_form_submit"
					value="Login"
					type="submit"
				/>
				{error ? (
					<div className="login_section_form_error">{error}</div>
				) : (
					<div />
				)}
			</form>
		</section>
	);
};

export default Login;
