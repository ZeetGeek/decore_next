import { teamData } from "@/api/teamData";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Team() {
	return (
		<>
			<section
				className="team-sec section"
				id="team"
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
								<h2 className="h2-title title-ani">we provide creative team</h2>
								<p>It is a dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
							</div>
						</Col>
					</Row>

					<div className="team-row">
						<Row>
							{teamData.map(({ image, title, socialMedia }, index) => (
								<Col
									lg={4}
									sm={6}
									key={index}
								>
									<div
										className="team-box wow fadeup-animation"
										data-wow-duration="1s"
										data-wow-delay="0.2s"
									>
										<div
											className="team-img "
											style={{ backgroundImage: "url" + `('${image}')` }}
										>
											<div className="team-social">
												<ul>
													{socialMedia.map(({ title, link, icon }, index) => (
														<li key={`social_${index}`}>
															<Link
																title={title}
																href={link}
																target="_blank"
															>
																<i className={icon}></i>
															</Link>
														</li>
													))}
												</ul>
											</div>
										</div>
										<p>{title}</p>
									</div>
								</Col>
							))}
						</Row>
					</div>
				</Container>
			</section>
		</>
	);
}
