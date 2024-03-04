import { teamData } from "@/api/teamData";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function TeamList() {
	return (
		<>
			<div
				className="team-sec team-page-sec light-bg section"
				id="team"
			>
				<Container>
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
											className="team-img"
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
			</div>
		</>
	);
}
