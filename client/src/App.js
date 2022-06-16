import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Project from "./pages/Project";
import Toolbar from "./components/toolbar/Toolbar";
import "./App.css";

function App() {
	const [location, setLocation] = useState("/");

	useEffect(() => {
		window.onpopstate = function() {
			setLocation(document.location.pathname);
		}
    });

	return (
		<Router>
			<Toolbar location={location} setLocation={setLocation}/>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/index' element={<Index />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/project' element={<Project />} />
			</Routes>
		</Router>
	);
}

export default App;
