import ctaBg from "@/images/cta-bg.jpg";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Cta2() {
	return (
		<>
			<section
				className="cta-sec section"
				style={{ backgroundImage: "url" + `('${ctaBg.src}')` }}
			>
				<div className="bg-overlay border-overlay" />
				<div className="sec-wp">
					<Container>
						<Row>
							<Col lg={12}>
								<div
									className="cta-text text-center wow fadeup-animation"
									data-wow-duration="1s"
									data-wow-delay="0.3s"
								>
									<h2 className="cta-title">We are always with you to make your project Success</h2>
									<p className="cta-text-inner m-auto mt-4 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
									<Link
										href="tel:6106487207"
										title="Call: 610-648-7207"
										className="sec-btn"
									>
										call 610-648-7207
									</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</section>
		</>
	);
}
