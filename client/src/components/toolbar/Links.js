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
        }, 1800)
    }, [setPreview, location]);

    // links appear after a beat
    useEffect(() => {
        // let index = document.getElementById("index")
        // let contact = document.getElementById("contact")
        let links = document.querySelector(".links")
        let toolbar = document.querySelector(".toolbar")

        if (window.location.pathname === '/') {
            // making the index and contact links disappear and reappear
            // index.style.display = "none"
            // contact.style.display = "none"
            links.style.display = "none"
            // setTimeout(() => {
                // index.style.display = "flex"
                // contact.style.display = "flex"
                // links.style.justifyContent = "space-between"
            // }, 2700)
            // delays showing links
            setTimeout(() => {
                links.style.display = "flex"
            }, 1000)
    
            // adjusting "Preview" linksing when links are added
            // links.style.justifyContent = "links"
            // setTimeout(() => {
            //     let prevContainer = document.getElementById("prev")
            //     prevContainer.style.marginRight = "32.5px"
            // }, 1000)
            // setTimeout(() => {
            //     let prevContainer = document.getElementById("prev")
            //     prevContainer.style.marginRight = "0"
            // }, 2700)
        } else {
            // links.style.justifyContent = "space-between"
            links.style.animation = "none"
            toolbar.style.animation = "none"
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