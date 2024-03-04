import { Col, Container, Row } from "react-bootstrap";
import bannerImage from "@/images/work-1.jpg";

export default function ProjectBanner() {
	return (
		<>
			<section
				className="project-banner"
				id="home"
			>
				<Container>
					<Row>
						<Col
							lg={12}
							className="text-center"
						>
							<div className="project-banner-text mb-4">
								<h1
									className="h1-title wow fadeup-animation"
									data-wow-duration="1s"
									data-wow-delay="0.1s"
								>
									Luxury Design
								</h1>
								<div
									className="wow fadeup-animation"
									data-wow-duration="1s"
									data-wow-delay="0.2s"
								>
									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat atque sapiente quas blanditiis magni esse nemo odit amet aspernatur modi ipsum illo culpa ut quibusdam vel, non rem
										libero nulla!
									</p>
								</div>
							</div>
						</Col>
					</Row>

					<div
						className="project-banner-img wow fadeup-animation"
						data-wow-duration="1s"
						data-wow-delay="0.3s"
						style={{ backgroundImage: "url" + `('${bannerImage.src}')` }}
					></div>
				</Container>
			</section>
		</>
	);
}
