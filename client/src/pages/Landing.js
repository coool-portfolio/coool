import React from "react";
import "./landing.css";
import Video from "../components/video/Video"
import VideoModal from "../components/video/VideoModal"

export default function Landing({ current, loading, modal, setModal }) {
	// const handleClick = (e) => {
	// 	e.preventDefault()

	// 	setModal(true)
	// }

	return (
		<div>
			{!current &&
				<footer>
					COOOL is a joint directing project between Jake Nokovic and John Tereick.
				</footer>
			}
			{/* MOBILE FRIENDLY FOOTER STAYS */}
			{window.innerWidth <= 768 &&
				<footer>
					COOOL is a joint directing project between Jake Nokovic and John Tereick.
				</footer>
			}

			{/* VIDEO PLAYER */}
			<div className="preview">
				<VideoModal current={current} modal={modal} />
				<Video current={current} loading={loading} modal={modal} setModal={setModal} />
			</div>

			{/* LOADING ALERT */}
			{/* {loading &&
				<div className="loading-animation">
					<div className="letter">Loooading</div>
				</div>
			} */}
			{/* LOADING STILL */}
			{/* <div className="preview">
				<div className="click-container">
					{!modal && current !== null &&
						<div className="play-button" onClick={handleClick} />
					}

					{current &&
						// <iframe preload="metadata" id="video" className="video clip" title={current.title} src={current.preview + '&autoplay=1&loop=1&background=1'} allow="autoplay; fullscreen" frameBorder={0} ></iframe>
						<img
							title={current.title}
							src={current.stillImg}
							alt={current.title + " image"}
							className='card-img right column'
						/>
					}
				</div>
			</div> */}
		</div>
	);
}