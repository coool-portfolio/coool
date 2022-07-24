import React from "react";
import './video.css'
// import KSwiss from '../../assets/images/project-images/kswiss.png'

function Video({ current, loading, modal, setModal }) {
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
                    <>
                        {/* LOADING IMG */}
                        <img
                            src={current.stillImg}
                            alt={current.title + " image"}
                            className='vid-still loading-still'
                        />
                        {/* LOADING TEXT */}
                        {loading &&
                            <div className="loading-animation">
                                <div className="letter">Loooading</div>
                            </div>
                        }
                        {/* CLIP */}
                        <iframe preload="metadata" id="video" className="video clip" title={current.title} src={current.preview + '&autoplay=1&loop=1&background=1'} allow="autoplay; fullscreen" frameBorder={0} ></iframe>
                    </>
                }
            </div>
        </>
    )
}

export default Video;