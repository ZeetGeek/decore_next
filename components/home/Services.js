import { servicesData } from "@/api/servicesData";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Services() {
	return (
		<>
			<section
				className="services-sec section"
				id="services"
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
								<h2 className="h2-title title-ani">what can we offer</h2>
								<p>It is a dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
							</div>
						</Col>
					</Row>

					<Row>
						{servicesData.map(({ icon, title, content, link }, index) => (
							<Col
								lg={4}
								key={index}
							>
								<div
									className="services-box wow fadeup-animation"
									data-wow-duration="1s"
									data-wow-delay="0.3s"
								>
									<div className="services-icon">
										<Image
											height="67"
											src={icon}
											alt="Design"
										/>
									</div>
									<h3 className="h3-title">{title}</h3>
									<p>{content}</p>

									<Link
										href={link}
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
												/>
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
												/>
											</g>
										</svg>
									</Link>
								</div>
							</Col>
						))}
					</Row>
				</Container>
			</section>
		</>
	);
}
