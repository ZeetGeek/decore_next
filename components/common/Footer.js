"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.svg";
import { Col, Container, Row } from "react-bootstrap";
import { footerMenuData } from "@/api/footerMenuData";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Footer() {
	// Get the current page slug
	const pathName = usePathname();

	// Init scroll to top page
	useEffect(() => {
		if (typeof window !== "undefined") {
			document.getElementById("scrollToTop").addEventListener("click", function () {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
				return false;
			});
		}
	}, []);

	return (
		<>
			<footer className="site-footer">
				<div className="top-footer">
					<Container>
						<Row className="g-0">
							<Col
								lg={4}
								className="col-lg-4"
							>
								<div className="footer-about">
									<div
										className="footer-logo wow left-animation"
										data-wow-duration="1s"
										data-wow-delay="0.2s"
									>
										<Link
											title="DeCore"
											href="/"
										>
											<Image
												src={logo}
												alt="Logo"
												width={96}
												height={58}
											/>
										</Link>
									</div>
									<div
										className="wow left-animation"
										data-wow-duration="1s"
										data-wow-delay="0.3s"
									>
										<p>It is a dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
									</div>

									<div
										className="subscribe-footer wow left-animation"
										data-wow-duration="1s"
										data-wow-delay="0.4s"
									>
										<h3 className="footer-title">subscribe</h3>
										<form className="subscribe-form">
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
												<button>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="26.857"
														height="26.857"
														viewBox="0 0 26.857 26.857"
													>
														<g
															data-name="Layer 45"
															transform="translate(13.518 -0.232) rotate(45)"
														>
															<path
																data-name="Path 228"
																d="M12.409,19.205a1.406,1.406,0,0,1-1.179-.742L8.483,13.521a.606.606,0,0,1,.242-.84.675.675,0,0,1,.867.289l2.748,4.942,5.466-16.34L1.411,6.953l6.4,3.61,5.114-5.114a.669.669,0,0,1,.944.944l-5.44,5.433a.622.622,0,0,1-.744.086l-6.81-3.8A1.4,1.4,0,0,1,.092,6.834a1.157,1.157,0,0,1,.85-1.1L17.278.319A1.334,1.334,0,0,1,18.69.648a1.334,1.334,0,0,1,.329,1.412L13.6,18.4a1.158,1.158,0,0,1-1.105.813Z"
																transform="translate(0 0)"
																fill="#244d4d"
															/>
														</g>
													</svg>
												</button>
											</div>
										</form>
									</div>
								</div>
							</Col>

							<Col lg={8}>
								<div className="footer-info-part white-text">
									<div
										className="footer-navigation wow right-animation"
										data-wow-duration="1s"
										data-wow-delay="0.3s"
									>
										<h3 className="footer-title">Navigation</h3>

										<ul>
											{footerMenuData.map(({ title, link }, index) => (
												<li key={index}>
													<Link
														title={title}
														className={pathName === link ? "footer-active-menu" : ""}
														href={link}
													>
														{title}
													</Link>
												</li>
											))}
										</ul>
									</div>

									<div
										className="footer-contact wow right-animation"
										data-wow-duration="1s"
										data-wow-delay="0.4s"
									>
										<h3 className="footer-title">Contacts</h3>
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
															/>
															<path
																data-name="Path 224"
																d="M17.816,12.408a3.408,3.408,0,1,0-3.408,3.408,3.408,3.408,0,0,0,3.408-3.408Zm-5.453,0a2.045,2.045,0,1,1,2.045,2.045,2.045,2.045,0,0,1-2.045-2.045Z"
																transform="translate(-6.908 -4.861)"
																fill="var(--white-color)"
															/>
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
															/>
															<path
																data-name="Path 226"
																d="M11.644,15.169a.692.692,0,0,0,.831,0l8.176-6.134a.692.692,0,0,0,.208-.852,2.119,2.119,0,0,0-.408-.575A2.077,2.077,0,0,0,18.982,7H5.136a2.077,2.077,0,0,0-1.468.609,2.118,2.118,0,0,0-.408.575.692.692,0,0,0,.208.852ZM5.136,8.385H18.982a.623.623,0,0,1,.194,0L12.059,13.75,4.942,8.385A.623.623,0,0,1,5.136,8.385Z"
																transform="translate(-3.059 -7)"
																fill="var(--white-color)"
															/>
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
															/>
														</svg>
													</span>{" "}
													610-648-7207
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
					<button
						type="button"
						id="scrollToTop"
						className="scrolltop"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="100"
							height="100"
							viewBox="0 0 100 100"
						>
							<g transform="translate(-1470 -529)">
								<g
									data-name="Ellipse 1"
									transform="translate(1470 529)"
									fill="none"
									stroke="var(--white-color)"
									strokeWidth="3"
									opacity="0.3"
								>
									<circle
										cx="50"
										cy="50"
										r="50"
										stroke="none"
									/>
									<circle
										cx="50"
										cy="50"
										r="48.5"
										fill="none"
									/>
								</g>
								<path
									data-name="Path 4"
									d="M17.753,41.631l-.5.5a.844.844,0,0,1-1.193,0l-5.867-5.9v26.43a.844.844,0,0,1-.844.844h-.7a.844.844,0,0,1-.844-.844V36.227l-5.867,5.9a.844.844,0,0,1-1.193,0l-.5-.5a.844.844,0,0,1,0-1.193L8.4,32.247a.844.844,0,0,1,1.193,0l8.156,8.19A.844.844,0,0,1,17.753,41.631Z"
									transform="translate(1511 531.5)"
									fill="#fff"
								/>
							</g>
						</svg>
					</button>
				</div>
				<div className="bottom-footer">
					<Container>
						<Row className="align-items-center">
							<Col lg={6}>
								<div className="copyright-text">
									<p>
										Copyright © 2021{" "}
										<Link
											href="https://themeforest.net/user/geekwebsolution"
											title="GeekCodeLab"
											target="_blank"
										>
											GeekCodeLab
										</Link>
										. All Rights Reserved.
									</p>
								</div>
							</Col>
							<Col lg={6}>
								<div className="social-icon">
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
							</Col>
						</Row>
					</Container>
				</div>
			</footer>
		</>
	);
}
