import React, { useState } from 'react';
import "./contact.css";
import ProfileImg from "../assets/images/coool_sitepics.png"

function Contact() {
	const [toSend, setToSend] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [alert, setAlert] = useState(false);
	const [isInvalid, setisInvalid] = useState(false);

	const handleInput = (name, value) => {
		setToSend({ ...toSend, [name]: value });
		// console.log("toSend", toSend)
		if (name === "email") {
			validateEmail(value);
		};
	};

	const validateEmail = (value) => {
		const email = value
		const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/

		if (emailRegex.test(email)) {
			setisInvalid(false);
		} else {
			setisInvalid(true);
		};
	}

	// const reset = () => setToSend({
	// 	name: '',
	// 	email: '',
	// 	subject: '',
	// 	message: '',
	// });

	const sendEmail = (event) => {
		event.preventDefault();
		setAlert(true);
		// send(
		//     'gmail',
		//     'template_5x49ssk',
		//     toSend,
		//     'H1n96WJh1ZD8qa-Wi'
		// )
		//     .then((response) => {
		//         console.log('SUCCESS!', response.status, response.text);
		//         setAlert(true)
		//         reset();
		//     })
		//     .catch((err) => {
		//         console.log('FAILED...', err);
		//     });
	};

	return (
		<div className="container columns">
			<div className="column is-two-fifths is-mobile">
				<figure className="image">
					<img
						className=""
						alt="coool pic"
						src={ProfileImg} />
				</figure>
			</div>

			<div className="form column is-three-fifths is-mobile">
				<h2 className="title is-2 header">For project inquires, please use the contact form below.</h2>

				{/* NAME */}
				<div className="field">
					<div className="control">
						<input
							type="text"
							id="name"
							name="name"
							value={toSend.name}
							onChange={(event) => handleInput("name", event.target.value)}
							className="input is-medium"
							placeholder="NAME"
						/>
					</div>
				</div>

				{/* EMAIL */}
				<div className="field">
					<div className="control">
						<input
							type="email"
							id="email"
							name="email"
							value={toSend.email}
							onChange={(event) => handleInput("email", event.target.value)}
							// className="input is-danger is-medium"
							className={isInvalid ? "input is-danger is-medium" : "input is-medium"}
							placeholder="EMAIL"
						/>
					</div>

					{isInvalid && <p className="help email is-danger">This email is invalid</p>}
				</div>

				{/* SUBJECT */}
				<div className="field">
					<div className="control">
						<input
							type="text"
							id="subject"
							value={toSend.subject}
							onChange={(event) => handleInput("subject", event.target.value)}
							className="input is-medium"
							placeholder="SUBJECT" />
					</div>
				</div>

				{/* MESSAGE */}
				<div className="field">
					<div className="control">
						<textarea
							id="message"
							name="message"
							value={toSend.message}
							onChange={(event) => handleInput("message", event.target.value)}
							className="textarea is-medium"
							placeholder="MESSAGE"></textarea>
					</div>
				</div>

				{/* ALERT */}
				{alert && <div className="notification is-success is-light">
					<button
						type="button"
						onClick={(event) => setAlert(false, event.target.value)}
						className="delete is-medium"></button>
					<strong>Message sent!</strong>
				</div>
				}

				{/* SUBMIT BTN */}
				<div className="field is-grouped">
					<div className="control">
						<button
							type="submit"
							onClick={sendEmail}
							className="button is-large"
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact;
