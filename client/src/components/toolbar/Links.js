import React, { useEffect, useState } from "react";
import "./toolbar.css";

import { NavLink } from 'react-router-dom'

function Links({ preview, setPreview, current, setCurrent }) {
    const [delay, setDelay] = useState(false);

    useEffect(() => {
        // if page reload
        if (document.location.pathname !== "/") {
            setPreview(true)
        }

        // delayed preview fade in
        setTimeout(() => {
            setDelay(true)
        }, 1000)
    }, [setPreview]);

    // links appear after a beat
    useEffect(() => {
        // making the index and contact links disappear and reappear
        let index = document.getElementById("index")
        index.style.display = "none"
        let contact = document.getElementById("contact")
        contact.style.display = "none"
        setTimeout(() => {
            index.style.display = "flex"
            contact.style.display = "flex"
            center.style.justifyContent = "space-between"
        }, 2700)

        // adjusting "Preview" centering when links are added
        let center = document.querySelector(".links")
        center.style.justifyContent = "center"
        setTimeout(() => {
            let prevContainer = document.getElementById("prev")
            prevContainer.style.marginRight = "32.5px"
        }, 1000)
        setTimeout(() => {
            let prevContainer = document.getElementById("prev")
            prevContainer.style.marginRight = "0"
        }, 2700)
    }, [])

    // removes landing "Preview" if not on landing
    function removePreviewIndex() {
        setPreview(false)
        setCurrent(null)
    }
    function removePreviewContact() {
        setPreview(false)
        setCurrent(null)
    }

    return (
        <>
            <div className={!current ? "links" : 'links links-with-video'}>
                {/* INDEX */}
                <NavLink
                    to="index"
                    id="index"
                    onClick={removePreviewIndex}
                    className={window.location.pathname === '/index' ? "current-link" : "toolbar-links"}
                >
                    Index
                </NavLink>
                {/* PREVIEW */}
                {delay &&
                    <div id="prev" className="preview-container">
                        {preview &&
                            <>
                                <p className="up-arrow">{'\u2191'}</p>
                                <p className="p-container">Preview</p>
                                <p className="up-arrow">{'\u2191'}</p>
                            </>
                        }
                        {/* PROJECT NAME */}
                        {current &&
                            <p className="p-container">{current.title}</p>
                        }
                    </div>
                }
                {/* CONTACT */}
                <NavLink
                    onClick={removePreviewContact}
                    to="contact"
                    id="contact"
                    className={window.location.pathname === '/contact' ? "current-link" : "toolbar-links"}
                >
                    Contact
                </NavLink>
            </div>
        </>
    )
}

export default Links;