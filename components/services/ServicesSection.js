import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import servicesIcon1 from "@/images/design.svg";
import servicesIcon2 from "@/images/solutions.svg";
import servicesIcon3 from "@/images/furniture.svg";
import servicesIcon4 from "@/images/creating-concept.svg";

export default function ServicesSection() {
	return (
		<>
			<section className="services-page-sec section light-bg pt-lg-0">
				<Container>
					<div className="services-sec-wp light-bg">
						<Row>
							<Col lg={5}>
								<div
									className="wow left-animation"
									data-wow-duration="1s"
									data-wow-delay="0.1s"
								>
									<h2 className="h2-title h2-without-line mb-4">we’r provided best interior services</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic neque iusto, inventore consequatur voluptates iste ex nesciunt illum doloremque adipisci laborum consequuntur repellat odio
										eaque vero voluptate modi assumenda? Laborum quo asperiores et ad.
									</p>
								</div>
							</Col>
							<Col lg={7}>
								<div
									className="services-sec-text wow right-animation"
									data-wow-duration="1s"
									data-wow-delay="0.1s"
								>
									<Row>
										<Col lg={6}>
											<div className="services-sec-box mb-5">
												<div className="services-icon">
													<Image
														width="66"
														height="66"
														src={servicesIcon1}
														alt="Design"
													/>
												</div>
												<h3 className="h3-title mb-3">Design & Planning</h3>
												<p>
													It is a dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
													accusam et justo duo dolores et ea rebum.
												</p>
											</div>
										</Col>
										<Col lg={6}>
											<div className="services-sec-box mb-5">
												<div className="services-icon">
													<Image
														width="55"
														height="67"
														src={servicesIcon2}
														alt="Solutions"
													/>
												</div>
												<h3 className="h3-title">Custom Solutions</h3>
												<p>
													It is a dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
													accusam et justo duo dolores et ea rebum.
												</p>
											</div>
										</Col>
										<Col lg={6}>
											<div className="services-sec-box mb-5">
												<div className="services-icon">
													<Image
														width="85"
														height="67"
														src={servicesIcon3}
														alt="Furniture"
													/>
												</div>
												<h3 className="h3-title">Furniture & Decor</h3>
												<p>
													It is a dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
													accusam et justo duo dolores et ea rebum.
												</p>
											</div>
										</Col>
										<Col lg={6}>
											<div className="services-sec-box mb-5">
												<div className="services-icon">
													<Image
														width="67"
														height="67"
														src={servicesIcon4}
														alt="creating concept"
													/>
												</div>
												<h3 className="h3-title mb-3">Creating Concept</h3>
												<p>
													It is a dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
													accusam et justo duo dolores et ea rebum.
												</p>
											</div>
										</Col>
									</Row>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
		</>
	);
}
