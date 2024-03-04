import { projectData } from "@/api/projectsData";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Project() {
	return (
		<>
			<section
				className="project-sec light-bg section"
				id="projects"
			>
				<Container className="container">
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
								<h2 className="h2-title title-ani">Our successfully projects </h2>
								<p>It is a dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
							</div>
						</Col>
					</Row>

					<div className="project-row">
						{projectData.map(({ image, title, link }, index) => (
							<figure
								className="project-box wow left-animation"
								data-wow-duration="1s"
								data-wow-delay="0.2s"
								key={index}
							>
								<div className="project-box-left-part">
									<div className="hidden-box">
										<div className="ani-img-wrapper">
											<Link
												title={title}
												href={link}
												className="project-img ani-image"
												style={{ backgroundImage: "url" + `('${image}')` }}
											></Link>
										</div>
									</div>
								</div>
								<figcaption className="project-box-right-part">
									<Link
										title={title}
										href={link}
										className="project-title"
									>
										{title}.
									</Link>
								</figcaption>
							</figure>
						))}
					</div>

					<div
						className="explore-more-btn wow fadeup-animation"
						data-wow-duration="1s"
						data-wow-delay="0.4s"
					>
						<Link
							title="Explore More Project"
							href="/projects"
							className="explore-more-link"
						>
							Explore More Project +
						</Link>
					</div>
				</Container>
			</section>
		</>
	);
}
