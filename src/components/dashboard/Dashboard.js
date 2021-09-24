import React, { useState, useEffect } from "react";
import axiosService from "../../services/axios-service";
import { Redirect } from "react-router-dom";
import * as actions from "../auth/login/actions";
import Progress from '../Progress'

const axiosInstance = axiosService.getInstance();

const Dashboard = () => {
	const [ file , setFile ] = useState(null);
	const [ user , setUser ] = useState(null);
	const [ msg , setMsg ] = useState("");


	useEffect(()=>{
		axiosInstance.get("/users").then(res => setUser(res.data));
	},[]);

	const deleteFile = (e) => {
		const id = e.target.name;
		axiosInstance.delete(`/files/${id}`).then(res => setMsg(res.data.msg));
	};

	const copyClipboard = (e) => {
		const url = e.target.name;
		console.log(e.target.name);
		const el = document.createElement('textarea');
		el.value = url;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);

		setMsg("Copy to Clipboard Sucessfully! Share the link");
	};


	return (
		<div className="dashboard">
			<form className="dashboard_form">
				<label htmlFor="file">Add File </label>
				<input type="file" id="file" className="dashboard_form_input" name="file" onChange={(e) => setFile({data:e.target.files[0],btn:e.target.name})} />

				
			</form>
			{file && <Progress file={file} setFile={setFile} />}
			<h3 className="dashboard_files"> Files </h3>
			{msg && <h3 className="msg">{msg}</h3>}

			<section className="dashboard_files_section">
				{user.files && user.files.map((file  , key)=> {
					return <div key={file.name} className="file"> 
						<img src={file.link}/>
						<h5 className="title"> {file.name}</h5>
						<div className="actions">
						<label htmlFor="update" className="update">Update </label>
						<input type="file" id="update" name={file.name} onChange={(e) => setFile({data:e.target.files[0],btn:e.target.name})} />


							<button className="share" name={file.link} onClick={e=>copyClipboard(e)}> Share </button>
							<button className="delete" name={file._id} onClick={e => deleteFile(e)}> Delete </button>
						</div>	
					</div>
				})}
			</section>
		</div>
	);
};

export default Dashboard;
