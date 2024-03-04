import { Col, Container, Row } from "react-bootstrap";
import aboutImage from "@/images/about-img.jpg";
import Link from "next/link";

export default function About() {
	return (
		<>
			<section
				className="about-us section"
				id="about"
			>
				<Container>
					<Row className="mb-5">
						<Col
							lg={6}
							className="m-auto"
						>
							<div
								className="sec-title-text wow fadeup-animation"
								data-wow-duration="1s"
								data-wow-delay="0.2s"
							>
								<h2 className="h2-title title-ani">About Us</h2>
								<p>It is a dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
							</div>
						</Col>
					</Row>

					<Row>
						<Col lg={6}>
							<div
								className="about-left-part wow left-animation"
								data-wow-duration="1s"
								data-wow-delay="0.2s"
							>
								<div className="hidden-box">
									<div className="ani-img-wrapper">
										<div
											className="about-img ani-image"
											style={{ backgroundImage: "url" + `(${aboutImage.src})` }}
										></div>
									</div>
								</div>
							</div>
						</Col>

						<Col lg={6}>
							<div
								className="about-right-part wow right-animation"
								data-wow-duration="1s"
								data-wow-delay="0.3s"
							>
								<div className="about-text">
									<p>
										It is a dolor sit amet consectetur, adipisicing elit. Fugit nemo blanditiis dolor possimus tempore nihil libero facere? Officiis, quam cupiditate! Fugiat quam do, consequatur obcaecati
										odit molestiae hic alias sed debitis quaerat culpa repellat autem libero odio eos dicta exercitationem dolore iure est non cum minima pariatur aliquid. Dicta officiis rem neque dolorum
										iste fugit exercitationem doque id, minima eaque adipisci autem ullam dolore error sint nisi quod esse aspernatur modi atque dolores eius quasi natus! Voluptate, laboriosam eum!
										Inventore tenetur nulla magnam ex dolorum provident eum architecto enim, consequatur voluptas iure reprehenderit nisi, deserunt numquam quibusdam rem at dolores.
									</p>
									<Link
										href="/about"
										className="read-more"
									>
										<span>Read More</span>
										<svg
											data-name="Group 90"
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="18.572"
											viewBox="0 0 20 18.572"
										>
											<g
												data-name="Group 88"
												transform="translate(0 0)"
											>
												<path
													data-name="Path 90"
													d="M2.7,13H21.3a.7.7,0,0,0,.649-.441.724.724,0,0,0-.152-.779L13.374,3.209a.692.692,0,0,0-.992,0,.723.723,0,0,0,0,1.01L19.6,11.571H2.7A.714.714,0,0,0,2.7,13Z"
													transform="translate(-2 -3)"
													fill="var(--primary-color)"
												></path>
											</g>
											<g
												data-name="Group 89"
												transform="translate(10.176 11.429)"
											>
												<path
													data-name="Path 91"
													d="M16.947,26.143a.7.7,0,0,0,.5-.209l5.614-5.714a.723.723,0,0,0,0-1.01.692.692,0,0,0-.992,0l-5.614,5.714a.723.723,0,0,0,0,1.01A.693.693,0,0,0,16.947,26.143Z"
													transform="translate(-16.246 -19)"
													fill="var(--primary-color)"
												></path>
											</g>
										</svg>
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}
