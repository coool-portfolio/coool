import React from "react";
import "./toolbar.css";

import { NavLink } from 'react-router-dom'

import Links from "./Links"

function Toolbar() {
	return (
		<div className="toolbar">
			<NavLink
				to="/"
				className="coool"
			>
				COOOL
			</NavLink>

			<hr />

			<Links />
		</div>
	)
}

export default Toolbar;
