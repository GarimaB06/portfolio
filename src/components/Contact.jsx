import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			"service_kgu8lr6",
			"template_ttwdc7s",
			form.current,
			"j2CA0I5ohZ68MHKEw"
		);
		e.target.reset();
	};

	return (
		<section className="contact section" id="contact">
			<h2 className="section-title">Contact</h2>
			<span className="section-subtitle">Let's Talk!</span>
			<div className="contact-container">
				<div className="contact-content">
					{/* <h3 className="contact-title">Find me here</h3> */}
					<div className="contact-info">
						{/* contact card #1 */}
						<div className="contact-card">
							<i className="bx bx contact__card-icon"></i>
							<p className="contact-card-title">Whatsapp me</p>
							<span className="contact-card-data">+1 (609)-356 3913 </span>
							<a href="https://wa.me/16093563913" className="contact-button">
								<i className="bx bxl-whatsapp contact__button-icon"></i>
							</a>
						</div>

						{/* contact card #2 */}
						<div className="contact-card">
							<i className="bx bx contact__card-icon"></i>
							<p className="contact-card-title">Email Me </p>
							<span className="contact-card-data">garima41@gmail.com </span>
							<a
								href="mailto:garima41@gmail.com.com"
								className="contact-button"
							>
								<i className="bx bx-mail-send contact__button-icon"></i>
							</a>
						</div>
					</div>
				</div>

				{/* contact form */}
				<div className="contact-content">
					{/* <h3 className="contact-title">Role Details</h3> */}
					<form
						action=""
						ref={form}
						onSubmit={sendEmail}
						className="contact-form"
					>
						<div className="contact-form-div">
							<label className="contact-form-tag">Company Name</label>
							<input
								type="text"
								name="name"
								className="contact-form-input"
								placeholder="Insert your name"
							/>
						</div>

						<div className="contact-form-div">
							<label className="contact-form-tag">Mail</label>
							<input
								type="email"
								name="name"
								className="contact-form-input"
								placeholder="Insert your email"
							/>
						</div>

						<div className="contact-form-div contact-form-area">
							<label className="contact-form-tag">Project</label>
							<textarea
								name="project"
								cols="30"
								rows="10"
								className="contact-form-input"
								placeholder="Enter Description"
							></textarea>
						</div>
					</form>
					<button href="#contact" type="submit" className="button button--flex">
						<span>Send Message</span>
						<svg
							className="button-icon"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
								fill="white"
							></path>
							<path
								d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
								fill="white"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
