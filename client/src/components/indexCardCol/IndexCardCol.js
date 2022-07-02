import React from "react";
import "./indexCardCol.css";

function IndexCardCol({ project }) {
	function creditParse(credits, columnDecider) {
		//Splits every credit line into a different index
		const creditArray = credits.split("\n");

		const creditArrDivider = creditArray.length / 3;

		const creditCol1Arr = [];
		const creditCol2Arr = [];
		const creditCol3Arr = [];

		//testing whats in the array
		for (let i = 0; i < creditArray.length; i++) {
			console.log("testing credit array: " + creditArray[i]);
		}
		console.log("END OF CREDIT PARSE");
	}

	return (
		<div className='cardContainer'>
			{/* CLIENT */}
			<div className='is-2 cardCol column'>
				<div className='project'>
					<h5>Client</h5>
					<h2>{project.client}</h2>
				</div>

				<div className='info'>
					<p>{project.credits}</p>
				</div>
			</div>

			{/* PROJECT */}
			<div className='is-2 cardCol column'>
				<div className='project'>
					<h5>Project</h5>
					<h2>{project.title}</h2>
				</div>

				<div className='info'>
					<p>{project.credits}</p>
				</div>
			</div>

			{/* YEAR */}
			<div className='is-2 cardCol column'>
				<div className='project'>
					<h5>Year</h5>
					<h2>{project.year}</h2>
				</div>

				<div className='info'>
					<p>{project.credits}</p>
				</div>
			</div>

			{/* IMG */}
			<figure className='image column is-6'>
				<img
					title={project.title}
					src={project.stillImg}
					alt={project.title + " image"}
					className='card-img right column'
				/>
				{/* <iframe width="640" height="480" className='card-img right column' title={project.title} src={project.stillImg} alt={project.title + ' image'} frameBorder={0} scrolling="no" seamless=""></iframe> */}
			</figure>
		</div>
	);
}

export default IndexCardCol;
