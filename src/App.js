import React from "react";
import "./App.css";

import AuthContextProvider from "./contexts/AuthContext";
import Root from "./components/root";
function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<Root />
			</AuthContextProvider>
		</div>
	);
}

export default App;
