import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import "./toolbar.css";

import Links from "./Links"

// Hard coded data
const nav = [
	{ title: "Hideout", letter: "O", link: "https://player.vimeo.com/video/589106246?h=188fd4f2fb&title=0&byline=0&portrait=0&autoplay=1&loop=1&background=1" },
	{ title: "Portraits of Men Crying", letter: "O", link: "https://drive.google.com/file/d/17jyZXQwF7TSobuugkFi9irfej3RMjttb/preview" },
	{ title: "Time to Melt", letter: "O", link: "https://www.youtube.com/embed/7EIyD_lQaXU?autoplay=1&mute=1" },
	{ title: "2021: A Personal Space Odyssey", letter: "O", link: "https://drive.google.com/file/d/1lTYcKIkRru1_-x3romqOsqe-D-fOtkeB/preview" },
	{ title: "Dressing Down", letter: "O", link: "https://drive.google.com/file/d/1XNSFc5edRSjk6E2dSTXJkZZUk-kA0he-/preview" },

	{ title: "Hideout", letter: "O", link: "https://player.vimeo.com/video/589106246?h=188fd4f2fb&title=0&byline=0&portrait=0&autoplay=1&loop=1&background=1" },
	{ title: "Portraits of Men Crying", letter: "O", link: "https://drive.google.com/file/d/17jyZXQwF7TSobuugkFi9irfej3RMjttb/preview" },
	{ title: "Time to Melt", letter: "O", link: "https://www.youtube.com/embed/7EIyD_lQaXU?autoplay=1&mute=1" },
	{ title: "2021: A Personal Space Odyssey", letter: "O", link: "https://drive.google.com/file/d/1lTYcKIkRru1_-x3romqOsqe-D-fOtkeB/preview" },
	{ title: "Dressing Down", letter: "O", link: "https://drive.google.com/file/d/1XNSFc5edRSjk6E2dSTXJkZZUk-kA0he-/preview" },

	{ title: "Hideout", letter: "O", link: "https://player.vimeo.com/video/589106246?h=188fd4f2fb&title=0&byline=0&portrait=0&autoplay=1&loop=1&background=1" },
	{ title: "Portraits of Men Crying", letter: "O", link: "https://drive.google.com/file/d/17jyZXQwF7TSobuugkFi9irfej3RMjttb/preview" },
	{ title: "Time to Melt", letter: "O", link: "https://www.youtube.com/embed/7EIyD_lQaXU?autoplay=1&mute=1" },
	{ title: "2021: A Personal Space Odyssey", letter: "O", link: "https://drive.google.com/file/d/1lTYcKIkRru1_-x3romqOsqe-D-fOtkeB/preview" },
	{ title: "Dressing Down", letter: "O", link: "https://drive.google.com/file/d/1XNSFc5edRSjk6E2dSTXJkZZUk-kA0he-/preview" },

	{ title: "2021: A Personal Space Odyssey", letter: "O", link: "https://drive.google.com/file/d/1lTYcKIkRru1_-x3romqOsqe-D-fOtkeB/preview" },
	{ title: "Dressing Down", letter: "O", link: "https://drive.google.com/file/d/1XNSFc5edRSjk6E2dSTXJkZZUk-kA0he-/preview" },
]

function Toolbar({ location, setLocation }) {
	const [visible, setVisible] = useState(true);
	const [right, setRight] = useState(false);
	const [left, setLeft] = useState(false);
	const [showAnimation, setShowAnimation] = useState(true);
	const [preview, setPreview] = useState(true);
	// const [reload, setReload] = useState(false);

	// watches the size of window
	useEffect(() => {
		window.addEventListener('resize', handleWidth)

		// if (reload === true) {
		// 	window.location.reload()
		// }
	});

	useEffect(() => {
		// on location change
		if (window.location.pathname === '/') {
			setShowAnimation(true)
		} else {
			setShowAnimation(false)
			setRight(false)
		}
	});

	useEffect(() => {
		// delays the arrows showing up if width under 1700
		setTimeout(() => {
			handleWidth()
		}, 2900)
		// removes original 3 OOO's
		setTimeout(() => {
			setVisible(false)
		}, 750)
	}, []);

	// sets arrows true or false depending on the width
	function handleWidth() {
		if (window.innerWidth <= 1700) {
			setRight(true)
			setLeft(false)
		} else {
			setRight(false)
		}
	}

	// RIGHT scroll arrow
	function rightScroll(event) {
		event.preventDefault();
		// scrolls right
		const scrollEl = document.querySelector(".loading-text")
		scrollEl.scrollLeft += 300
		// shows left arrow
		setLeft(true)
		// removes right arrow if reached the end
		if (scrollEl.scrollLeft >= 358) {
			setRight(false)
		}
	}

	// LEFT scroll arrow
	function leftScroll(event) {
		event.preventDefault()
		// shows right arrow if triggered
		setRight(true)
		// scrolls left
		const scrollEl = document.querySelector(".loading-text")
		scrollEl.scrollLeft -= 300
		// removes left arrow if reached beginning and shows right arrow
		if (scrollEl.scrollLeft <= 300) {
			setLeft(false)
			setRight(true)
		}
	}

	// O nav
	const handleChange = (event) => {
		const { id, title } = event.target;
		// console.log(title)

		// setCurrent({
		//     ...current,
		//     title: title,
		//     id: id,
		// });
	};

	return (
		<div className="toolbar">
			<div className="load-text coool">
				{/* LEFT ARROW */}
				<button
					onMouseEnter={leftScroll}
					onClick={leftScroll}
					className="arrow left">
					{left &&
						<svg xmlns="http://www.w3.org/2000/svg" width={36}
							height={36} className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="square" strokeLinejoin="square" d="M15 19l-7-7 7-7" />
						</svg>
					}
				</button>
				
				{/* COOOL ANIMATION */}
					{showAnimation
						? <>
							<div>C</div>
							{visible
								? <div>OOO</div>
								: <div className="loading-text">
									{nav.map((o, i) => (
										<div
											onMouseEnter={handleChange}
											key={i}
											id={o.link}
											title={o.title}
											className="each-o"
										>
											{o.letter}
										</div>
									))}
								</div>
							}
							<div>L</div>
						</>
						: <Link to="/" className="no-animation-coool" onClick={() => {
							setPreview(true)
							setLocation('/')
							handleWidth()
							// setReload(true)
						}}>
							<div>COOOL</div>
						</Link>
					}

				{/* RIGHT ARROW */}
				<button
					onMouseEnter={rightScroll}
					onClick={rightScroll}
					className="arrow right">
					{right &&
						<svg xmlns="http://www.w3.org/2000/svg" width={36}
							height={36} className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="square" strokeLinejoin="square" d="M9 5l7 7-7 7" />
						</svg>
					}
				</button>
			</div>

			<hr />
			{/* NAV LINKS */}
			<Links preview={preview} setPreview={setPreview} setLocation={setLocation} />
		</div>
	)
}

export default Toolbar;
