import { Col, Container, Row } from "react-bootstrap";
import { servicesDetailsData } from "@/api/servicesDetails";

export default function ServicesDetail() {
	return (
		<>
			<section className="services-detail section pb-5">
				<Container>
					<Row>
						{servicesDetailsData.map(({ title, content }, index) => (
							<Col
								lg={6}
								key={index}
							>
								<div
									className="services-detail-box mb-5 wow left-animation"
									data-wow-duration="1s"
									data-wow-delay="0.1s"
								>
									<h2 className="mb-3">
										0{index + 1}. {title}
									</h2>
									<p>{content}</p>
								</div>
							</Col>
						))}
					</Row>
				</Container>
			</section>
		</>
	);
}
