import React, { useState, useEffect } from "react";
import IndexCardCol from "../indexCardCol/IndexCardCol";
import "./indexCard.css";

function IndexCard({ projects }) {
	const [index, setIndex] = useState(5);
	const [showDownBtn, setshowDownBtn] = useState(true);
	const [toEndBtn, setToEndBtn] = useState(false);
	
	// if page refreshes, reset page scrolled to top
	useEffect(() => {
		setIndex(5)
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		}
		setshowDownBtn(true)
	}, [])

	// watches scrolling
	window.onscroll = function () {
		// console.log(window.pageYOffset)
		// add 5 more project when scrolled down to 5
		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
			setTimeout(() => {
				setIndex(index + 5)
				document.documentElement.scrollTop += 250
			}, 500)
			// resets if back at top of page
		} else if (window.pageYOffset <= 1600) {
			setIndex(5)
		}
		// showing JUMP TO TOP BTN
		if (index >= 17) {
			setshowDownBtn(false)
		}
		// showing JUMP TO END BTN 
		// for mobile
		if (window.innerWidth <= 768) {
			if (window.pageYOffset > 1200 && window.pageYOffset < 18500) {
				setToEndBtn(true)
			} else {
				setToEndBtn(false)
			}
		} else {
			// for desktop
			if (window.pageYOffset > 1200 && window.pageYOffset < 8000) {
				setToEndBtn(true)
			} else {
				setToEndBtn(false)
			}
		}
	};

	// BOTTOM scroll arrow
	function bottomScroll(event) {
		event.preventDefault()
		// adding 1 more project after each click
		setIndex(index + 1)
		// scrolling page down a little
		document.documentElement.scrollTop += 600
	}
	// scrolls back to TOP
	function scrollTop(event) {
		event.preventDefault()
		// resets page
		setIndex(5)
		window.scrollTo(0, 0);
		setshowDownBtn(true)
	}
	// scrolls to END
	function scrollEnd(event) {
		event.preventDefault()
		setTimeout(() => {
			// shows all projects
			setIndex(projects.length)
			// scrolling to bottom of page
			window.scrollTo(0, document.body.scrollHeight);
			// showing JUMP TO TOP BTN
			setshowDownBtn(false)
		}, 250)
	}

	return (
		<div className='index columns is-desktop'>
			<>
				{/* filters and maps based on index */}
				{projects.filter((credit, i) => i <= index).map((project, i) => (
					<IndexCardCol key={Math.floor(Math.random() * 1000)} project={project} />
				))}
			</>

			{showDownBtn ?
				// DOWN ARROW
				<>
					<button
						onClick={bottomScroll}
						className="arrow-down"
						aria-label="Bottom Scroll Button">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className=""
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}>
							<path strokeLinecap="square" strokeLinejoin="square" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{/* ARROW TO LAST PROJECT */}
					{toEndBtn &&
						<button
							onClick={scrollEnd}
							className="arrow-down end"
							aria-label="Bottom Scroll Button">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=""
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}>
								<path strokeLinecap="square" strokeLinejoin="square" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
							</svg>
						</button>
					}
				</>
				:
				// UP ARROW
				<button
					onClick={scrollTop}
					className="arrow-down"
					aria-label="Bottom Scroll Button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className=""
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path strokeLinecap="square" strokeLinejoin="square" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
					</svg>
				</button>
			}
		</div>
	);
}

export default IndexCard;
