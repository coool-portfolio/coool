import React from "react";
import "./landing.css";
import Video from "../components/video/Video"

export default function Landing({ current, loading }) {
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
				<Video current={current} />
			</div>

			{/* LOADING ALERT */}
			{loading &&
				<div className="loading-animation">
					<div className="letter">Loooading</div>
				</div>
			}
		</div>
	);
}