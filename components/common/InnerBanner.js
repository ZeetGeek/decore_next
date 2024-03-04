import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function InnerBanner({ title, image }) {
	return (
		<section
			className="inner-banner light-bg"
			style={{ backgroundImage: "url" + `('${image}')` }}
		>
			<div className="bg-overlay" />
			<div className="sec-wp">
				<Container>
					<Row>
						<Col lg={12}>
							<div
								className="banner-text p-0 text-center wow fadeup-animation"
								data-wow-duration="1s"
								data-wow-delay="0.1s"
							>
								<h1 className="h1-title title-ani">{title ? title : "Inner Banner Title"}</h1>
								<div className="breadcrumb-wp mt-3">
									<ul className="breadcrumb">
										<li className="breadcrumb-item">
											<Link
												href="/"
												title="Home"
											>
												home
											</Link>
										</li>
										<li className="breadcrumb-item active">{title ? title : "Inner Banner Title"}</li>
									</ul>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	);
}
