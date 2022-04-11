import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Project from "./pages/Project";
import Toolbar from "./components/toolbar/Toolbar";
import "./App.css";

function App() {
	return (
		<Router>
			<Toolbar />
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
