import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Project from "./pages/Project";
import Toolbar from "./components/toolbar/Toolbar";
import "./App.css";
import API from "./utils/API";

function App() {
	const [current, setCurrent] = useState(null);
	const [loading, setLoading] = useState(false);
	const [modal, setModal] = useState(false);
	const [projects, setProjects] = useState(null);
	const [projectLinks, setProjectLinks] = useState(null);
	const [status, setStatus] = useState(true);
	const [location, setLocation] = useState(window.location.pathname);

	useEffect(() => {
		loadProjects();
	}, []);

	function loadProjects() {
		API.getProjects()
			.then((res) => {
				setProjects(res.data);
				if (!res.ok) {
					setStatus(false)
				}
			})
			.catch((err) => console.log(err));

		API.getProjectLinks()
			.then((res) => {
				setProjectLinks(res.data);
			})
			.catch((err) => {
				console.log(err);
				setProjectLinks(null);
			});
	}

	return (
		<Router>
			<Toolbar
				current={current}
				setCurrent={setCurrent}
				setLoading={setLoading}
				modal={modal}
				setModal={setModal}
				projectLinks={projectLinks}
				location={location}
				setLocation={setLocation} />
			<Routes>
				<Route path='/'
					element={<Landing
						current={current}
						setCurrent={setCurrent}
						loading={loading}
						modal={modal}
						setModal={setModal} />} />
				<Route path='/index'
					element={<Index
						location={location}
						projects={projects}
						setProjects={setProjects}
						loadProjects={loadProjects}
						status={status} />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/project' element={<Project />} />
			</Routes>
		</Router>
	);
}

export default App;
