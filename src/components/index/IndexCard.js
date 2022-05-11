import React from "react";
import IndexCardCol from "../indexCardCol/IndexCardCol";
import CardImg from "../../assets/images/K-Swiss-Img.jpeg";
import "./indexCard.css";

function IndexCard(props) {
	return (
		<div className='card columns'>
			<IndexCardCol title={"Client"} {...props} />
			<IndexCardCol title={"Project"} {...props} />
			<IndexCardCol title={"Year"} {...props} />
			{/* <img src={props.img} alt='' className='card-img-right column' /> */}
			<figure className='image'>
				<img src={CardImg} alt='' className='card-img right column' />
			</figure>
		</div>
	);
}

export default IndexCard;
