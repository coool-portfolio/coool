import React from "react";
import './video.css'

function Video({ current, modal, setModal }) {
    const handleClick = (e) => {
        e.preventDefault()

        setModal(true)
    }

    return (
        <>
            <div className="click-container">
                {!modal && current !== null &&
                    <div className="play-button" onClick={handleClick} />
                }

                {current &&
                    <iframe preload="metadata" id="video" className="video clip" title={current.title} src={current.clip} allow="autoplay; fullscreen" frameBorder={0} allowFullScreen></iframe>
                }
            </div>
        </>
    )
}

export default Video;