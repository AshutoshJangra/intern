import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import * as actions from "./actions";

const Register = () => {
	const [name, setName] = useState("");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passconf, setPassconf] = useState("");


	const [error, setError] = useState("");

	const [flag, setFlag] = useState(false);

	const data = {
		name,
		
		email,
		password,
		passwordConfirm: passconf,
	
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		actions
			.register(data)
			.then((registered) => setFlag(true), (err) => setError(err));
	};

	if (flag) {
		return <Redirect to={{ pathname: "/login" }} />;
	}

	return (
		<section className="register_section">
			<form className="register_section_form" onSubmit={handleSubmit}>
				<h2 className="login_section_form_title">Start Your Journey</h2>
				<input
					type="text"
					placeholder="Name"
					className="register_section_form_input"
					onChange={(e) => setName(e.target.value)}
					required
				/>

				

			
				<input
					type="email"
					placeholder="Email"
					className="register_section_form_input"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<input
					type="password"
					placeholder="Password"
					className="register_section_form_input"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<input
					type="password"
					placeholder="Confirm Password"
					className="register_section_form_input"
					onChange={(e) => setPassconf(e.target.value)}
					required
				/>

			

				<input
					className="register_section_form_submit "
					value="Sign Up"
					type="submit"
				/>
			</form>

			{error ? "error yes" : ""}
		</section>
	);
};

export default Register;
