import React from "react";
import IndexCardCol from "../indexCardCol/IndexCardCol";
import "./indexCard.css";

function IndexCard({ projects }) {
	return (
		<div className='index columns is-desktop'>
			{projects.map((project, i) => (
				<IndexCardCol key={i} project={project} />
			))}
		</div>
	);
}

export default IndexCard;
