import React from "react";

function IndexCardCol(props) {
	return (
		<div classname='cardCol'>
			<h5>{props.title}</h5>
			<h2>{props.specific}</h2>
			<p>{props.info}</p>
		</div>
	);
}

export default IndexCardCol;
