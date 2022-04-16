import React from "react";
import "./contact.css";
import ProfileImg from "../assets/images/coool_sitepics.png"

function Contact() {
	return (
		<div className="contact-container">
			<div className="main container columns">
				<div className="column is-two-fifths">
					<figure className="image">
						<img
							className=""
							alt="coool pic"
							src={ProfileImg} />
					</figure>
				</div>

				<div className="form is-three-fifths">
					<h2 className="title is-2 header">For project inquires, please use the contact form below.</h2>

					<div className="field">
						<div className="control">
							<input className="input is-medium" type="text" placeholder="NAME" />
						</div>
					</div>

					<div className="field">
						<div className="control">
							<input className="input is-medium" type="email" placeholder="EMAIL" />
						</div>
						{/* <p className="help is-danger">This email is invalid</p> */}
					</div>

					<div className="field">
						<div className="control">
							<input className="input is-medium" type="text" placeholder="SUBJECT" />
						</div>
					</div>

					<div className="field">
						<div className="control">
							<textarea className="textarea is-medium" placeholder="MESSAGE"></textarea>
						</div>
					</div>

					<div className="field is-grouped">
						<div className="control">
							<button className="button is-large">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact;
