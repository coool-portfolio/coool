import React from "react";
import "./toolbar.css";

import { NavLink } from 'react-router-dom'

function Links() {
    return (
        <div className="links">
            <NavLink
                to="index"
            >
                Index
            </NavLink>
            <p> {'\u2191'} Preview {'\u2191'}</p>
            <NavLink
                to="contact"
            >
                Contact
            </NavLink>
        </div>
    )
}

export default Links;