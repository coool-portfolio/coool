import React from "react";
import "./landing.css";
import Video from "../components/video/Video"
import VideoModal from "../components/video/VideoModal"

export default function Landing({ current, loading, modal, setModal }) {
	return (
		<div>
			{!current &&
				<footer className="landing-text">
					COOOL is a joint directing project between Jake Nokovic and John Tereick.
				</footer>
			}

			{/* VIDEO PLAYER */}
			<div className="preview">
				<VideoModal current={current} modal={modal} />
				<Video current={current} loading={loading} modal={modal} setModal={setModal} />
			</div>
		</div>
	);
}