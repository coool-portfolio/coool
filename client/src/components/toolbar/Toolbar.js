import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import "./toolbar.css";

import Links from "./Links"

// Hard coded data fallback incase db fails
const nav = [
	{ title: "Hideout", link: "https://player.vimeo.com/video/589106246?h=188fd4f2fb&title=0&byline=0&portrait=0&autoplay=1&loop=1", clip: "https://player.vimeo.com/video/722579273?h=c0ad86b01e", img: "https://user-images.githubusercontent.com/89707381/180664882-9c773577-fba9-439d-b233-e4606b7c1d9a.png" },
	{ title: "Portraits of Men Crying", link: "https://player.vimeo.com/video/546246624?h=396eb1378e&title=0&byline=0&portrait=0&autoplay=1&loop=1", clip: "https://player.vimeo.com/video/722578866?h=8c8e8f3648", img: "https://user-images.githubusercontent.com/89707381/180664887-5c643de2-5423-46a6-b4fc-1aa5546e9eb0.png" },
	{ title: "Time to Melt", link: "https://www.youtube.com/embed/7EIyD_lQaXU?autoplay=1", clip: "https://player.vimeo.com/video/722579159?h=7608bd8e12", img: "https://user-images.githubusercontent.com/89707381/180664892-cfb64262-2c0c-4eb6-bada-518f7ae38c4f.png" },
	{ title: "2021: A Personal Space Odyssey", link: "https://www.youtube.com/embed/B2nXcWyBYdE?autoplay=1", clip: "https://player.vimeo.com/video/722579118?h=c4e0c70e9d", img: "https://user-images.githubusercontent.com/89707381/180664894-3b5078d8-c3de-42f2-8357-345daff81a89.png" },
	{ title: "Dressing Down", link: "https://www.youtube.com/embed/PchaMpnIhBU?autoplay=1", clip: "https://player.vimeo.com/video/722579427?h=2558561ea0", img: "https://user-images.githubusercontent.com/89707381/180664900-7963b789-5740-42c5-a92a-e1c8506bd8b5.png" },

	{ title: "Gagosian Premieres: Gregory Crewdson", link: "https://www.youtube.com/embed/GARXqyRfFcY?autoplay=1", clip: "https://player.vimeo.com/video/722579367?h=1f085cc247", img: "https://user-images.githubusercontent.com/89707381/180664910-17c3268a-5b4b-483f-9118-4f31ab6af5e6.png" },
	{ title: "Emotional R&B", link: "https://www.youtube.com/embed/bHHHbpQnd-4?autoplay=1", clip: "https://player.vimeo.com/video/722579380?h=53205fd7fd", img: "https://user-images.githubusercontent.com/89707381/180664912-d051e0f1-56c4-46c9-8181-63542efbb1ea.png" },
	{ title: "Somehow", link: "https://www.youtube.com/embed/U00fIl_ArHQ?autoplay=1", clip: "https://player.vimeo.com/video/722578900?h=9292857ea0", img: "https://user-images.githubusercontent.com/89707381/180664914-e23d92b0-9d60-41af-bb3d-9f1be6e3824c.png" },
	{ title: "At It Again", link: "https://www.youtube.com/embed/VRiENpklOO4?autoplay=1", clip: "https://player.vimeo.com/video/722579668?h=26cf5f979f", img: "https://user-images.githubusercontent.com/89707381/180664919-8f8b2da2-2c6e-4a66-8a90-70c842b3e873.png" },
	{ title: "The Knife", link: "https://www.youtube.com/embed/6109rocRH-Q?autoplay=1", clip: "https://player.vimeo.com/video/722579630?h=16467148ad", img: "https://user-images.githubusercontent.com/89707381/180664924-d13ddc36-4d05-42a0-b35e-8fc575ae33a4.png" },

	{ title: "No Wings", link: "https://www.youtube.com/embed/kq2QPimzQRw?autoplay=1", clip: "https://player.vimeo.com/video/722579197?h=435cc4f5a1", img: "https://user-images.githubusercontent.com/89707381/180664936-e651a08b-26be-4065-ba58-437286c6b9a0.png" },
	{ title: "Daily Routine", link: "https://www.youtube.com/embed/_Xv1JByUZ9E?autoplay=1", clip: "https://player.vimeo.com/video/722579588?h=08f8d01693", img: "https://user-images.githubusercontent.com/89707381/180664942-10e731b4-b52b-4598-854c-125c6b2a2f25.png" },
	{ title: "Loneliness", link: "https://www.youtube.com/embed/SGtD82ExtAQ?autoplay=1", clip: "https://player.vimeo.com/video/722579545?h=a7b8d5b7ae", img: "https://user-images.githubusercontent.com/89707381/180664946-940cbe2f-46a4-49e8-8fa0-cce74f754c0d.png" },
	{ title: "Alien With A Sleepmask On", link: "https://www.youtube.com/embed/uqDNufv66Wg?autoplay=1", clip: "https://player.vimeo.com/video/722578961?h=64f8ae2025", img: "https://user-images.githubusercontent.com/89707381/180664948-5f7c5655-b1a2-4ea0-914a-4e1ac29920e0.png" },
	{ title: "Dissolving", link: "https://www.youtube.com/embed/JdQl53qwSAc?autoplay=1", clip: "https://player.vimeo.com/video/722579513?h=5295a81a22", img: "https://user-images.githubusercontent.com/89707381/180664954-89a24d89-b034-4ce8-8222-b3090d0a147d.png" },

	{ title: "Here Comes the Snow", link: "https://www.youtube.com/embed/tZFUcZTyqD4?autoplay=1", clip: "https://player.vimeo.com/video/722579315?h=31f97263b2", img: "https://user-images.githubusercontent.com/89707381/180664962-c36cb625-86ed-4a93-9583-47852ffc8204.png" },
	{ title: "Muerte's Death", link: "https://player.vimeo.com/video/362910525?h=9b4df0fbf9&title=0&byline=0&portrait=0&autoplay=1&loop=1", clip: "https://player.vimeo.com/video/722579233?h=bc23b206c9", img: "https://user-images.githubusercontent.com/89707381/180664967-61d5ed5c-a938-4509-a324-947d036fd41e.png" },
	{ title: "New Sounds x Dizzy Fae", link: "https://player.vimeo.com/video/285129219?h=30852f60df&autoplay=1&loop=1&color=ffffff&portrait=0", clip: "https://player.vimeo.com/video/722579473?h=64d1bdaba0", img: "https://user-images.githubusercontent.com/89707381/180664971-acc825e7-620b-46fc-9b78-9aa8407ab31a.png" },
]

function Toolbar({ current, setCurrent, location, setLocation, setLoading, setModal, projectLinks }) {
	const [visible, setVisible] = useState(true);
	const [right, setRight] = useState(false);
	const [left, setLeft] = useState(false);
	const [showAnimation, setShowAnimation] = useState(true);
	const [preview, setPreview] = useState(true);
	const [change, setChange] = useState("");
	const [pageWidth, setpageWidth] = useState(false);

	// watches the size of window
	useEffect(() => {
		window.addEventListener('resize', handleWidth)
	});

	useEffect(() => {
		// on location change
		if (location === '/') {
			setShowAnimation(true)
		} else {
			setShowAnimation(false)
			setRight(false)
			document.querySelector(".coool").style.color = "black"
		}
	}, [location]);

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

		if (current) {
			document.querySelector(".coool").style.color = "#b2b2b2"
		}
	}, [current]);

	// sets arrows true or false depending on the width
	function handleWidth() {
		if (window.innerWidth <= 1750) {
			setRight(true)
			setLeft(false)
		} else {
			setRight(false)
		}
		//extra O's if page XXXL
		if (window.innerWidth >= 1980) {
			setpageWidth(true)
		} else {
			setpageWidth(false)
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
			if (scrollEl.scrollLeft >= 95) {
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
	const handleChange = (preview, title, fullVideo, loadingImg) => {
		setModal(false)
		setPreview(false)
		setLoading(true)

		setCurrent({
			...current,
			title: title,
			fullVideo: fullVideo,
			preview: preview,
			loadingImg: loadingImg
		});

		// console.log(current)
		// setting the current hovered on "O" to black
		document.getElementById(preview).style.color = "black"

		// setting the previous watched "O" to back to gray
		if (change === null) {
			document.getElementById(preview).style.color = "black"
		} else if (change.preview !== preview) {
			// document.getElementById(change.preview).style.color = generateRandomColor()
			document.getElementById(change.preview).style.color = "#b2b2b2"
		}
	};
	// gets a random color
	// const generateRandomColor = () => {
	// 	return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
	// }

	const openModal = (event) => {
		event.preventDefault();
		setModal(true)
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
										className="arrow"
										aria-label="Left Scroll Button">
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
										className="arrow"
										aria-label="Right Scroll Button">
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
								{projectLinks === null ?
									<>
									{/* backup if database fails */}
										{nav.map((o, i) => (
											<div
												onMouseEnter={() => handleChange(o.clip, o.title, o.link, o.img)}
												onClick={openModal}
												key={i}
												id={o.clip}
												title={o.title}
												className="each-o"
											>
												O
											</div>
										))}
										{/* Filler O's if screen is XXXL */}
										{pageWidth && <div>OO</div>}
									</>
									:
									<>
										{projectLinks.map((o, i) => (
											<div
												onMouseEnter={() => handleChange(o.preview, o.title, o.fullVideo, o.loadingImg)}
												onClick={openModal}
												key={i}
												id={o.preview}
												title={o.title}
												className="each-o"
											>
												O
											</div>
										))}
										{/* Filler O's if screen is XXXL */}
										{pageWidth && <div>OO</div>}
									</>
								}
							</div>
						}
						<div>L</div>
					</>
					: <Link to="/" className="no-animation-coool" onClick={() => {
						setPreview(true)
						setLoading(false)
						handleWidth()
						setLocation('/')
					}}>
						<div>COOOL</div>
					</Link>
				}
			</div>

			{!current &&
				<hr />
			}

			{/* NAV LINKS */}
			<Links preview={preview} setPreview={setPreview} current={current} setCurrent={setCurrent} location={location} setLocation={setLocation} />
		</div>
	)
}

export default Toolbar;
