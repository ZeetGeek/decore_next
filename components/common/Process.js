import { processData } from "@/api/processData";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function Process() {
	return (
		<>
			<section
				className="process-sec light-bg section"
				id="process"
			>
				<div className="sec-wp">
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
									<h2 className="h2-title title-ani">our working process</h2>
									<p>It is a dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
								</div>
							</Col>
						</Row>

						<Row>
							{processData.map(({ icon, title, content }, index) => (
								<Col
									lg={3}
									sm={6}
									key={index}
								>
									<div
										className="process-box wow fadeup-animation"
										data-wow-duration="1s"
										data-wow-delay="0.2s"
									>
										<div className="process-title">
											<Image
												src={icon}
												alt="concept"
											/>
											<h4 className="h4-title">
												0{index + 1}. {title}
											</h4>
										</div>
										<p>{content}</p>
									</div>
								</Col>
							))}
						</Row>
					</Container>
				</div>
			</section>
		</>
	);
}
