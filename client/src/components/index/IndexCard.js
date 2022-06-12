import React from "react";
import IndexCardCol from "../indexCardCol/IndexCardCol";
import "./indexCard.css";

function IndexCard( {projects} ) {
	return (
		<div className='index columns is-desktop'>
			{projects.map((project) => (
				<IndexCardCol key={project.client} project={project} />
			))}
		</div>
	);
}

export default IndexCard;
