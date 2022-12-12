import React, { useEffect, useState } from "react";
import "./toolbar.css";

import { NavLink } from 'react-router-dom'

function Links({ preview, setPreview, current, setCurrent, location, setLocation }) {
    const [delay, setDelay] = useState(false);

    // watches the size of window
    useEffect(() => {
        window.addEventListener('resize', handleWidth)
    });

    useEffect(() => {
        handleWidth()
    }, [current])

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
        let links = document.querySelector(".links")
        let toolbar = document.querySelector(".toolbar")

        if (window.location.pathname === '/') {
            // making the index and contact links disappear and reappear
            links.style.display = "none"
            // delays showing links
            setTimeout(() => {
                links.style.display = "flex"
            }, 1000)

        } else {
            links.style.animation = "none"
            toolbar.style.animation = "none"
        }
    }, [])

    // adjusting the font size of Nav Titles so they don't overlap with the video
    function handleWidth() {
        let pContainer = document.querySelector(".p-container")
        if (window.innerWidth <= 768) {
            if (pContainer !== null) {
                let textP = pContainer.innerText
                if (textP !== null && textP !== "Preview") {
                    if (textP.length >= 33) {
                        pContainer.style.fontSize = "19px"
                    } else {
                        pContainer.style.fontSize = "24px"
                    }
                }
            }
        } else {
            if (pContainer !== null) {
                pContainer.style.fontSize = "30px"
            }
        }
    }

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
                            <>
                                {current.title === current.client
                                    ?
                                    <p className="p-container">{current.title}</p>
                                    :
                                    <p className="p-container">{current.client.split("\n").shift()} / {current.title}</p>
                                }
                            </>
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