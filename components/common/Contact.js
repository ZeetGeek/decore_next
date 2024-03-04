import { Col, Container, Row } from "react-bootstrap";

export default function Contact() {
	return (
		<>
			<section
				className="contact-sec section"
				id="contact"
			>
				<Container>
					<Row className="g-0">
						<Col lg={6}>
							<div className="contact-left-part">
								<div
									className="contact-title mb-5 wow fadeup-animation"
									data-wow-duration="1s"
									data-wow-delay="0.2s"
								>
									<h2 className="h2-title title-ani h2-without-line">Get in touch</h2>
									<p>
										Your email address will not be published. Required fields are marked <span>*</span>
									</p>
								</div>

								<form
									className="contact-form wow fadeup-animation"
									data-wow-duration="1s"
									data-wow-delay="0.3s"
								>
									<div className="form-input-wp">
										<label>
											Your Name <span>*</span>
										</label>
										<input
											type="text"
											className="form-input"
											required
										/>
										<div className="ani-line"></div>
									</div>
									<div className="form-input-wp">
										<label>
											Your Email <span>*</span>
										</label>
										<input
											type="email"
											className="form-input"
											required
										/>
										<div className="ani-line"></div>
									</div>
									<div className="form-flex-box">
										<div className="form-input-wp">
											<label>Message</label>
											<textarea
												cols="30"
												rows="10"
												className="form-input"
											></textarea>
											<div className="ani-line"></div>
										</div>
										<div className="submit-btn">
											<button className="sec-btn">submit</button>
										</div>
									</div>
								</form>
							</div>
						</Col>

						<Col lg={6}>
							<div className="map">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26545.924698352897!2d-84.43582140880395!3d33.72859439968054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503254dd74a31%3A0x91604e2186c322d8!2sAtlanta%2C%20GA%2030310%2C%20USA!5e0!3m2!1sen!2sin!4v1623663854263!5m2!1sen!2sin"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
								></iframe>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}
