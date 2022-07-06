import React, { useState } from "react";
import IndexCardCol from "../indexCardCol/IndexCardCol";
import "./indexCard.css";

function IndexCard({ projects }) {
	const [index, setIndex] = useState(5);
	const [showDownBtn, setshowDownBtn] = useState(true);
	const [toEndBtn, setToEndBtn] = useState(false);
	const [loadedProjects, setLoadedProjects] = useState(projects.map(project => project._id));

	// watches scrolling
	window.onscroll = function () {
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
		// showing JUMP TO EACH PROJECT BTN
		if (window.pageYOffset > document.body.scrollHeight - 1250) {
			setshowDownBtn(false)
			setLoadedProjects(projects.map(project => project._id))
		} else {
			setshowDownBtn(true)
		}
		// showing JUMP TO END BTN 
		if (window.pageYOffset > 1200 && window.pageYOffset < 8000) {
			setToEndBtn(true)
		} else {
			setToEndBtn(false)
		}
	};

	// BOTTOM scroll arrow
	function bottomScroll(event) {
		event.preventDefault()
		// adding 1 more project after each click
		setIndex(index + 1)

		// jumping to the next project by it's id if not scrolled to far down
		if (window.pageYOffset <= 500) {
			const card = document.getElementById(loadedProjects.shift());
			card.scrollIntoView(true)
		} else {
			document.documentElement.scrollTop += 600
		}
	}
	// scrolls back to TOP
	function scrollTop(event) {
		event.preventDefault()
		setIndex(5)
		window.scrollTo(0, 0);
	}
	// scrolls to END
	function endScroll(event) {
		event.preventDefault()
		setIndex(projects.length)
		window.scrollTo(0, document.body.scrollHeight);
	}

	return (
		<div className='index columns is-desktop'>
			<>
				{/* filters and maps based on index */}
				{projects.filter((credit, i) => i < index).map((project, i) => (
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
							onClick={endScroll}
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
