import React from "react";
import IndexCardCol from "../indexCardCol/IndexCardCol";
import CardImg from "../../assets/images/K-Swiss-Img.jpeg";
import "./indexCard.css";

function IndexCard(props) {
	return (
		<div className='card columns'>
			<IndexCardCol
				title='Client'
				specific='K-Swiss'
				info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui tellus.'
			/>
			<IndexCardCol
				title='Project'
				specific='Hideout'
				info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui tellus.'
			/>
			<IndexCardCol
				title='Year'
				specific='2021'
				info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui tellus.'
			/>
			{/* <img src={props.img} alt='' className='card-img-right column' /> */}
			<figure className='image'>
				<img src={CardImg} alt='' className='card-img right column' />
			</figure>
		</div>
	);
}

export default IndexCard;
