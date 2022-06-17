import React, { useEffect, useState } from "react";
import "./toolbar.css";

import { NavLink } from 'react-router-dom'

function Links({ preview, setPreview, setLocation }) {
    const [delay, setDelay] = useState(false);

    useEffect(() => {
        // if page reload
        if (document.location.pathname !== "/") {
            setPreview(false)
        }
    
        // delayed preview fade in
        setTimeout(() => {
            setDelay(true)
        }, 1000)
    }, [setPreview]);

    function removePreviewIndex() {
        setLocation('/index')
        setPreview(false)
    }
    function removePreviewContact() {
        setLocation('/contact')
        setPreview(false)
    }

    return (
        <div className="links">
            {/* INDEX */}
            <NavLink
                to="index"
                onClick={removePreviewIndex}
                className={window.location.pathname === '/index' ? "current-link" : "toolbar-links"}
                // className="toolbar-links"
            >
                Index
            </NavLink>
            {/* PREVIEW */}
            {delay && preview &&
                <div className="preview-container">
                    <p className="up-arrow">{'\u2191'}</p>
                    <p className="p-container">Preview</p>
                    <p className="up-arrow">{'\u2191'}</p>
                </div>
            }
            {/* CONTACT */}
            <NavLink
                onClick={removePreviewContact}
                to="contact"
                className={window.location.pathname === '/contact' ? "current-link" : "toolbar-links"}
            >
                Contact
            </NavLink>
        </div>
    )
}

export default Links;