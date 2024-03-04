import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function ContactForm() {
	return (
		<>
			<section className="contact-page-sec section">
				<Container>
					<div
						className="contact-form-wp wow fadeup-animation"
						data-wow-duration="1s"
						data-wow-delay="0.1s"
					>
						<Row className="g-0">
							<Col lg={4}>
								<div className="contact-form-info white-text">
									<h2 className="mb-3">Contact information</h2>
									<p>fill up the form and our team will get back to you within 24 hours.</p>
									<div className="footer-contact mt-4">
										<ul>
											<li>
												<Link
													title="1657 Kuhl Avenue Atlanta, GA 30310"
													href="#"
													className="location-link"
												>
													<span>
														<svg
															data-name="locate location map pin"
															xmlns="http://www.w3.org/2000/svg"
															width="15"
															height="17.823"
															viewBox="0 0 15 17.823"
														>
															<path
																data-name="Path 223"
																d="M17.8,5.124A7.5,7.5,0,0,0,7.194,15.73l2.795,2.795a.684.684,0,1,0,.968-.968L8.162,14.762a6.135,6.135,0,1,1,8.67,0l-4.819,4.819a.684.684,0,1,0,.968.968L17.8,15.73a7.5,7.5,0,0,0,0-10.606Z"
																transform="translate(-4.997 -2.927)"
																fill="var(--white-color)"
															></path>
															<path
																data-name="Path 224"
																d="M17.816,12.408a3.408,3.408,0,1,0-3.408,3.408,3.408,3.408,0,0,0,3.408-3.408Zm-5.453,0a2.045,2.045,0,1,1,2.045,2.045,2.045,2.045,0,0,1-2.045-2.045Z"
																transform="translate(-6.908 -4.861)"
																fill="var(--white-color)"
															></path>
														</svg>
													</span>{" "}
													1657 Kuhl Avenue Atlanta, GA 30310
												</Link>
											</li>
											<li>
												<Link
													title="StephenARoyse@teleworm.us"
													href="mailto:StephenARoyse@teleworm.us"
												>
													<span>
														<svg
															data-name="mail email e-mail letter"
															xmlns="http://www.w3.org/2000/svg"
															width="18"
															height="12.462"
															viewBox="0 0 18 12.462"
														>
															<path
																data-name="Path 225"
																d="M20.308,13a.692.692,0,0,0-.692.692v5.538a.692.692,0,0,1-.692.692H5.077a.692.692,0,0,1-.692-.692V13.692a.692.692,0,1,0-1.385,0v5.538a2.08,2.08,0,0,0,2.077,2.077H18.923A2.08,2.08,0,0,0,21,19.231V13.692A.692.692,0,0,0,20.308,13Z"
																transform="translate(-3 -8.846)"
																fill="var(--white-color)"
															></path>
															<path
																data-name="Path 226"
																d="M11.644,15.169a.692.692,0,0,0,.831,0l8.176-6.134a.692.692,0,0,0,.208-.852,2.119,2.119,0,0,0-.408-.575A2.077,2.077,0,0,0,18.982,7H5.136a2.077,2.077,0,0,0-1.468.609,2.118,2.118,0,0,0-.408.575.692.692,0,0,0,.208.852ZM5.136,8.385H18.982a.623.623,0,0,1,.194,0L12.059,13.75,4.942,8.385A.623.623,0,0,1,5.136,8.385Z"
																transform="translate(-3.059 -7)"
																fill="var(--white-color)"
															></path>
														</svg>
													</span>{" "}
													StephenARoyse@teleworm.us
												</Link>
											</li>
											<li>
												<Link
													title="610-648-7207"
													href="tel:610-648-7207"
												>
													<span>
														<svg
															data-name="phone celuler contact call"
															xmlns="http://www.w3.org/2000/svg"
															width="20"
															height="20.021"
															viewBox="0 0 20 20.021"
														>
															<path
																data-name="Path 227"
																d="M22.038,5.461,20.264,3.688a2.344,2.344,0,0,0-3.547.273L14.991,6.305a2.344,2.344,0,0,0-.344,2.078l.1.3c.211.7.484,1.562.656,2.141a.781.781,0,0,1-.039.547,9.718,9.718,0,0,1-1.625,2.344.782.782,0,0,0,1.1,1.109,11.046,11.046,0,0,0,1.922-2.742,2.281,2.281,0,0,0,.133-1.7c-.164-.562-.445-1.453-.664-2.148l-.094-.3a.781.781,0,0,1,.148-.68l1.727-2.344a.781.781,0,0,1,1.18-.094l.523.523L18.155,7.758a.782.782,0,0,0,1.312.852L20.85,6.469l.125.117a2.023,2.023,0,0,1,.531,1.469c0,1.375-.93,3.906-5.258,8.156-4.539,4.453-8.14,6.25-9.633,4.742l-1.82-1.8a.776.776,0,0,1,.094-1.18L7.234,16.25a.781.781,0,0,1,.687-.117l1.477.461-1.664,1.18a.782.782,0,0,0,.9,1.281L11.6,16.969a.762.762,0,0,0-.219-1.375h0l-2.969-.953a2.344,2.344,0,0,0-2.078.344L3.992,16.711a2.344,2.344,0,0,0-.273,3.547l1.773,1.781a3.367,3.367,0,0,0,2.437.984c1.969,0,4.937-1.367,9.375-5.719,3.781-3.711,5.711-6.828,5.726-9.265a3.484,3.484,0,0,0-.992-2.578Z"
																transform="translate(-3.033 -3.003)"
																fill="var(--white-color)"
															></path>
														</svg>
													</span>{" "}
													610-648-7207
												</Link>
											</li>
										</ul>
									</div>
									<div className="social-icon mt-4">
										<ul>
											<li>
												<Link
													title="Follow On Facebook"
													href="https://www.facebook.com/"
													target="_blank"
												>
													<i className="fab fa-facebook-f"></i>
												</Link>{" "}
											</li>
											<li>
												<Link
													title="Follow On Twitter"
													href="https://twitter.com/"
													target="_blank"
												>
													<i className="fab fa-twitter"></i>
												</Link>
											</li>
											<li>
												<Link
													title="Follow On Instagram"
													href="https://www.instagram.com/"
													target="_blank"
												>
													<i className="fab fa-instagram"></i>
												</Link>
											</li>
											<li>
												<Link
													title="Follow On Linkedin"
													href="https://in.linkedin.com/"
													target="_blank"
												>
													<i className="fab fa-linkedin-in"></i>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</Col>

							<Col lg={8}>
								<form className="contact-page-form light-bg">
									<Row>
										<Col lg={6}>
											<div className="form-input-wp">
												<label>
													First Name <span>*</span>
												</label>
												<input
													type="text"
													className="form-input"
													required
												/>
												<div className="ani-line"></div>
											</div>
										</Col>
										<Col lg={6}>
											<div className="form-input-wp">
												<label>
													Last Name <span>*</span>
												</label>
												<input
													type="text"
													className="form-input"
													required
												/>
												<div className="ani-line"></div>
											</div>
										</Col>
									</Row>
									<Row>
										<Col lg={6}>
											<div className="form-input-wp">
												<label>
													Mail <span>*</span>
												</label>
												<input
													type="email"
													className="form-input"
													required
												/>
												<div className="ani-line"></div>
											</div>
										</Col>
										<Col lg={6}>
											<div className="form-input-wp">
												<label>
													Phone <span>*</span>
												</label>
												<input
													type="number"
													className="form-input"
													required
												/>
												<div className="ani-line"></div>
											</div>
										</Col>
									</Row>
									<Row>
										<Col lg={12}>
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
										</Col>
									</Row>
								</form>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
		</>
	);
}
