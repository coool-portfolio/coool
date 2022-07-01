import React from "react";
import './video.css'

function VideoModal({ current, modal }) {
    return (
        <>
            {modal && current &&
                <iframe preload="metadata" className="video video-modal" title={current.title} src={current.fullVideo} allow="autoplay; fullscreen" frameBorder={0} ></iframe>
            }
        </>
    )
}

export default VideoModal;