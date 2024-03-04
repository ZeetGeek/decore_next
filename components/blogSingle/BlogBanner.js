import { Col, Container, Row } from "react-bootstrap";
import bannerImage from "@/images/single-banner-img.jpg";

export default function BlogBanner() {
	return (
		<>
			<section
				className="blog-single-banner"
				id="home"
			>
				<div className="sec-wp">
					<Container>
						<Row className="align-items-center">
							<Col lg={7}>
								<div
									className="banner-text p-0 wow left-animation"
									data-wow-duration="1s"
									data-wow-delay="0.1s"
								>
									<h1 className="h1-title title-ani">Top 10 Tips for Your Kitchen Interior Design</h1>
								</div>
							</Col>
							<Col lg={5}>
								<div
									className="single-blog-banner-img wow right-animation"
									data-wow-duration="1s"
									data-wow-delay="0.2s"
									style={{ backgroundImage: "url" + `('${bannerImage.src}')` }}
								></div>
							</Col>
						</Row>
					</Container>
				</div>
			</section>
		</>
	);
}
