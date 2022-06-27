import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Project from "./pages/Project";
import Toolbar from "./components/toolbar/Toolbar";
import "./App.css";

function App() {
	const [current, setCurrent] = useState(null);
	const [loading, setLoading] = useState(false);
	const [modal, setModal] = useState(false);

	return (
		<Router>
			<Toolbar current={current} setCurrent={setCurrent} setLoading={setLoading} modal={modal} setModal={setModal} />
			<Routes>
				<Route path='/' element={<Landing current={current} setCurrent={setCurrent} loading={loading} modal={modal} setModal={setModal} />} />
				<Route path='/index' element={<Index />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/project' element={<Project />} />
			</Routes>
		</Router>
	);
}

export default App;
