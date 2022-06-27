import React from "react";
import './video.css'

function VideoModal({ current, modal }) {
    return (
        <>
            {modal && current &&
                <iframe preload="metadata" className="video video-modal" title={current.title} src={current.link} allow="autoplay; fullscreen" frameBorder={0} allowFullScreen></iframe>
            }
        </>
    )
}

export default VideoModal;