import React, { useEffect, useState } from "react";
import "./toolbar.css";

import { NavLink } from 'react-router-dom'

function Links({ preview, setPreview, current, setCurrent, location, setLocation }) {
    const [delay, setDelay] = useState(false);

    useEffect(() => {
        // if page reload
        if (window.location.pathname === "/" || location === "/") {
            setPreview(true)
        } else {
            setPreview(false)
        }

        // delayed preview fade in
        setTimeout(() => {
            setDelay(true)
        }, 1000)
    }, [setPreview]);

    // links appear after a beat
    useEffect(() => {
        if (window.location.pathname === '/') {
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
        } else {
            document.querySelector(".links").style.justifyContent = "space-between"
        }
    }, [])
 
    // removes landing "Preview" if not on landing
    function removePreviewIndex() {
        setLocation('/index')
        setPreview(false)
        setCurrent(null)
    }
    function removePreviewContact() {
        setLocation('/contact')
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
                    className={location === '/index' ? "current-link" : "toolbar-links"}
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
                    to="contact"
                    id="contact"
                    onClick={removePreviewContact}
                    className={location === '/contact' ? "current-link" : "toolbar-links"}
                >
                    Contact
                </NavLink>
            </div>
        </>
    )
}

export default Links;