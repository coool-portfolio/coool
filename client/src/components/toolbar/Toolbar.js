import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import "./toolbar.css";

import Links from "./Links"

// Hard coded data
const nav = [
	{ title: "Hideout", letter: "O", link: "https://player.vimeo.com/video/589106246?h=188fd4f2fb&title=0&byline=0&portrait=0&autoplay=1&loop=1&muted=0" },
	{ title: "Portraits of Men Crying", letter: "O", link: "https://player.vimeo.com/video/546246624?h=396eb1378e&title=0&byline=0&portrait=0&autoplay=1&loop=1&muted=0" },
	{ title: "Time to Melt", letter: "O", link: "https://www.youtube.com/embed/7EIyD_lQaXU?autoplay=1&mute=0" },
	{ title: "2021: A Personal Space Odyssey", letter: "O", link: "https://www.youtube.com/embed/B2nXcWyBYdE?autoplay=1&mute=0" },
	{ title: "Dressing Down", letter: "O", link: "https://www.youtube.com/embed/PchaMpnIhBU?autoplay=1&mute=0" },

	{ title: "Gagosian Premieres: Gregory Crewdson", letter: "O", link: "https://www.youtube.com/embed/GARXqyRfFcY?autoplay=1&mute=0" },
	{ title: "Emotional R&B", letter: "O", link: "https://www.youtube.com/embed/bHHHbpQnd-4?autoplay=1&mute=0" },
	{ title: "Somehow", letter: "O", link: "https://www.youtube.com/embed/U00fIl_ArHQ?autoplay=1&mute=0" },
	{ title: "At It Again", letter: "O", link: "https://www.youtube.com/embed/VRiENpklOO4?autoplay=1&mute=0" },
	{ title: "The Knife", letter: "O", link: "https://www.youtube.com/embed/6109rocRH-Q?autoplay=1&mute=0" },

	{ title: "No Wings", letter: "O", link: "https://www.youtube.com/embed/kq2QPimzQRw?autoplay=1&mute=0" },
	{ title: "Daily Routine", letter: "O", link: "https://www.youtube.com/embed/_Xv1JByUZ9E?autoplay=1&mute=0" },
	{ title: "Loneliness", letter: "O", link: "https://www.youtube.com/embed/SGtD82ExtAQ?autoplay=1&mute=0" },
	{ title: "Alien With A Sleepmask On", letter: "O", link: "https://www.youtube.com/embed/uqDNufv66Wg?autoplay=1&mute=0" },
	{ title: "Dissolving", letter: "O", link: "https://www.youtube.com/embed/JdQl53qwSAc?autoplay=1&mute=0" },

	{ title: "Here Comes the Snow", letter: "O", link: "https://www.youtube.com/embed/tZFUcZTyqD4?autoplay=1&mute=0" },
	{ title: "Muerte's Death", letter: "O", link: "https://player.vimeo.com/video/362910525?h=9b4df0fbf9&title=0&byline=0&portrait=0&autoplay=1&loop=1&muted=0" },
	{ title: "New Sounds x Dizzy Fae", letter: "O", link: "https://player.vimeo.com/video/285129219?h=30852f60df&autoplay=1&loop=1&color=ffffff&portrait=0&muted=0" },
]

function Toolbar({ current, setCurrent, setLoading }) {
	const [visible, setVisible] = useState(true);
	const [right, setRight] = useState(false);
	const [left, setLeft] = useState(false);
	const [showAnimation, setShowAnimation] = useState(true);
	const [preview, setPreview] = useState(true);
	const [change, setChange] = useState("");

	// watches the size of window
	useEffect(() => {
		window.addEventListener('resize', handleWidth)
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

	useEffect(() => {
		setChange(current)
	}, [current]);

	// sets arrows true or false depending on the width
	function handleWidth() {
		if (window.innerWidth <= 1750) {
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
		if (window.innerWidth <= 768) {
			if (scrollEl.scrollLeft >= 900) {
				setRight(false)
			}
		} else if (window.innerWidth <= 1024) {
			if (scrollEl.scrollLeft >= 700) {
				setRight(false)
			}
		} else {
			if (scrollEl.scrollLeft >= 100) {
				setRight(false)
			}
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
		setPreview(false)
		setLoading(true)
		const { id, title } = event.target;

		setCurrent({
			...current,
			title: title,
			id: id,
		});

		// setting the current hovered on "O" to gray
		document.getElementById(id).style.color = "gray"
		// setting the previous watched "O" to a random color
		if (change.id !== id) {
			document.getElementById(change.id).style.color = generateRandomColor()
		}
	};
	// gets a random color
	const generateRandomColor = () => {
		return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
	}
 
	return (
		<div className="toolbar">
			<div className="load-text coool">

				{/* COOOL ANIMATION */}
				{showAnimation
					? <>
						{/* BUTTONS */}
						<div className="buttons-container">
							{/* LEFT ARROW */}
							<div className="left">
								{left &&
									<button
										onMouseEnter={leftScroll}
										onClick={leftScroll}
										className="arrow">
										{left &&
											<svg xmlns="http://www.w3.org/2000/svg" width={36}
												height={36} className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
												<path strokeLinecap="square" strokeLinejoin="square" d="M15 19l-7-7 7-7" />
											</svg>
										}
									</button>
								}
							</div>
							{/* RIGHT ARROW */}
							<div className="right">
								{right &&
									<button
										onMouseEnter={rightScroll}
										onClick={rightScroll}
										className="arrow">
										{right &&
											<svg xmlns="http://www.w3.org/2000/svg" width={36}
												height={36} className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
												<path strokeLinecap="square" strokeLinejoin="square" d="M9 5l7 7-7 7" />
											</svg>
										}
									</button>
								}
							</div>

						</div>

						{/* COOOL ANIMATION */}
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
						setLoading(false)
						handleWidth()
					}}>
						<div>COOOL</div>
					</Link>
				}
			</div>

			<hr />

			{/* NAV LINKS */}
			<Links preview={preview} setPreview={setPreview} current={current} setCurrent={setCurrent} />
		</div>
	)
}

export default Toolbar;
