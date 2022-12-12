import React, { useState, useEffect } from "react";
import "./indexCardCol.css";

function IndexCardCol({ project, getRandomKey }) {
	const [showVideo, setShowVideo] = useState(false);
	const [mobile, setMobile] = useState(false)

	// watches the size of window
	useEffect(() => {
		window.addEventListener('resize', handleWidth)
	})
	// when page loads
	useEffect(() => {
		if (window.innerWidth <= 768) {
			setMobile(true)
		} else {
			setMobile(false)
		}
	}, [mobile])
	// sets true or false depending on the width
	function handleWidth() {
		if (window.innerWidth <= 768) {
			setMobile(true)
		} else {
			setMobile(false)
		}
	}

	// returns first half of client
	const client = project.client.split("\n").shift()

	// ARRAY PARSE
	const creditArray = project.credits.split("\n");
	// divides array into 3 parts
	const creditArrDivider = Math.floor(creditArray.length / 3);
	// creates arrays for each 3 columns
	const creditCol1Arr = [];
	const creditCol2Arr = [];
	const creditCol3Arr = [];

	// pushes elements into each array by each third
	for (let i = 0; i < creditArray.length; i++) {
		if (i <= creditArrDivider) {
			creditCol1Arr.push(creditArray[i])
		} else if (i >= creditArrDivider && i <= (creditArray.length - creditArrDivider)) {
			creditCol2Arr.push(creditArray[i])
		} else {
			creditCol3Arr.push(creditArray[i])
		}
	}

	return (
		<div id={project._id} className='cardContainer'>
			{!mobile
				?
				<>
					{/* CLIENT */}
					<div className='is-2 cardCol column'>
						<div className='project'>
							<h5>Client</h5>
							<h2 className="client">{client}</h2>
						</div>

						<div className='info'>
							{creditCol1Arr.map((credit, i) => {
								if (credit === '') {
									return (<br key={getRandomKey()} />)
								} else {
									return (<p key={getRandomKey()}>{credit}</p>)
								}
							})}
						</div>
					</div>

					{/* PROJECT */}
					<div className='is-2 cardCol column'>
						<div className='project'>
							<h5>Project</h5>
							<h2>{project.title}</h2>
						</div>

						<div className='info'>
							{creditCol2Arr.map((credit, i) => {
								if (credit === '') {
									return (<br key={getRandomKey()} />)
								} else {
									return (<p key={getRandomKey()}>{credit}</p>)
								}
							})}
						</div>
					</div>

					{/* YEAR */}
					<div className='is-2 cardCol column third'>
						<div className='project'>
							<h5>Year</h5>
							<h2>{project.year}</h2>
						</div>

						<div className='info'>
							{creditCol3Arr.map((credit, i) => {
								if (credit === '') {
									return (<br key={getRandomKey()} />)
								} else {
									return (<p key={getRandomKey()}>{credit}</p>)
								}
							})}
						</div>
					</div>
				</>
				:
				<>
				{/* MOBILE */}
					{/* TITLES */}
					<div className='is-2 cardCol column'>
						<div className="mobile-layout">
							<div className='project'>
								<h5>Client</h5>
								<h2 className="client">{client}</h2>
							</div>

							<div className='project'>
								<h5>Project</h5>
								<h2>{project.title}</h2>
							</div>

							<div className='project'>
								<h5>Year</h5>
								<h2>{project.year}</h2>
							</div>
						</div>
					</div>

					{/* CREDITS */}
					<div className='is-2 cardCol column'>
						<div className='info'>
							{creditCol1Arr.map((credit, i) => {
								if (credit === '') {
									return (<br key={getRandomKey()} />)
								} else {
									return (<p key={getRandomKey()}>{credit}</p>)
								}
							})}
						</div>

						<div className='info'>
							{creditCol2Arr.map((credit, i) => {
								if (credit === '') {
									return (<br key={getRandomKey()} />)
								} else {
									return (<p key={getRandomKey()}>{credit}</p>)
								}
							})}
						</div>

						<div className='info'>
							{creditCol3Arr.map((credit, i) => {
								if (credit === '') {
									return (<br key={getRandomKey()} />)
								} else {
									return (<p key={getRandomKey()}>{credit}</p>)
								}
							})}
						</div>
					</div>
				</>
			}

			{/* IMG */}
			<figure className='image column is-6'>
				{!showVideo ?
					<img
						onClick={() => setShowVideo(true)}
						title={project.title}
						src={project.stillImg}
						alt={project.title + " image"}
						className='card-img right column'
					/>
					:
					<iframe
						preload="metadata"
						className="card-img right column"
						title={project.title} src={project.fullVideo}
						allow="autoplay; fullscreen"
						frameBorder={0} >
					</iframe>
				}
			</figure>
		</div>
	);
}

export default IndexCardCol;
