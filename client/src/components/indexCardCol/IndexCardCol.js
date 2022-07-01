import React from "react";
import "./indexCardCol.css";

function IndexCardCol( {project} ) {
	return (
		<div className="cardContainer">
			{/* CLIENT */}
			<div className='is-2 cardCol column'>
				<div className="project">
					<h5>Client</h5>
					<h2>{project.client}</h2>
				</div>


				<div className="info">
					<p>Director: {project.director}</p>
					<p>{project.execprod}</p>
					<p>Producer: {project.producer}</p>
					<p>1st AD: {project.firstAD}</p>
					<p>Prod. Company: {project.prodcompany}</p>

					<br />

					<p>DP: {project.dp}</p>
					<p>1st AC: {project.firstAC}</p>
					<p>{project.steadicam}</p>

					<br />

					<p>Gaffer: {project.gaffer}</p>
					<p>{project.keygrip}</p>
					<p>{project.grip}</p>
					<p>{project.setphotography}</p>
					<p>PA: {project.pa}</p>
				</div>
			</div>

			{/* PROJECT */}
			<div className='is-2 cardCol column'>
				<div className="project">
					<h5>Project</h5>
					<h2>{project.title}</h2>
				</div>

				<div className="info">
					<p>Production Designer: {project.productiondesigner}</p>
					<p>{project.artpa}</p>

					<br />

					<p>Editor: {project.editor}</p>
					<p>Colorist: {project.colorist}</p>
					<p>{project.origmusic}</p>
					<p>{project.sounddesign}</p>
					<p>{project.titledesign}</p>


					{project.thankyou1 && (
						<div>
							<br />

							<p>Thank you to: </p>
							<p>{project.thankyou1}</p>
							<p>{project.thankyou2}</p>
							<p>{project.thankyou3}</p>
							<p>{project.thankyou4}</p>
						</div>
					)
					}
					{project.actor1 && (
						<div>
							<br />

							<p>{project.actor1}</p>
							<p>{project.actor2}</p>
							<p>{project.actor3}</p>
							<p>{project.actor4}</p>
							<p>{project.actor5}</p>
						</div>
					)
					}
				</div>
			</div>

			{/* YEAR */}
			<div className='is-2 cardCol column'>
				<div className="project">
					<h5>Year</h5>
					<h2>{project.year}</h2>
				</div>

				<div className="info">
					{project.actor6 && (
						<div>
							<p>{project.actor6}</p>
							<p>{project.actor7}</p>
							<p>{project.actor8}</p>
							<p>{project.actor9}</p>
							<p>{project.actor10}</p>
						</div>
					)
					}

					{project.extra1 && (
						<div>
							<br />

							<p>Market Extras: </p>
							<p>{project.extra1}</p>
							<p>{project.extra2}</p>
							<p>{project.extra3}</p>
							<p>{project.extra4}</p>
							<p>{project.extra5}</p>
							<p>{project.extra6}</p>
							<p>{project.extra7}</p>
						</div>
					)
					}
				</div>
			</div>

			{/* IMG */}
			<figure className='image column is-6'>
				{/* <img src={project.img} alt={project.client} className='card-img right column' /> */}
				<iframe width="640" height="480" className='card-img right column' title={project.title} src={project.stillImg} alt={project.title + ' image'} frameBorder={0} scrolling="no" seamless=""></iframe>
			</figure>
		</div>
	);
}

export default IndexCardCol;
