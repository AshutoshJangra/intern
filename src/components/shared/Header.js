import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import '../../App.css';

const Header = () => {
	const { isAuth, signOut } = useContext(AuthContext);

	const renderLink = () => {
		if (isAuth) {
			return (
				<React.Fragment>
					<Link className="navlink" to="/" onClick={signOut}>
						logout
					</Link>		
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<Link className="navlink" to="/register">
						Signup
					</Link>
				</React.Fragment>
			);
		}
	};
	return (
		<div className="header">
			{/*<img src={logoCo} />*/}
			<Link to="/" className="logo">
				Intern
			</Link>

			<nav className="navlinks">{renderLink()}</nav>
		</div>
	);
};

export default Header;
