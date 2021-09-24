import React, { useContext } from "react";
import loading from "../../images/loading.svg";

const Loading = () => {
	return (
		<div className="loading">
			{/*<img className="loading_art" src={loading} alt="loading" />*/}
			<div className="loading_box_1" />
			<div className="loading_box_2" />
			<div className="loading_box_2" />
			<div className="loading_box_2" />
		</div>
	);
};

export default Loading;
