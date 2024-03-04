import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import bannerImage from "@/images/banner-bg.jpg";
import Fancybox from "@/components/common/Fancybox";

export default function MainBanner() {
	return (
		<>
			<section
				className="main-banner"
				id="home"
				style={{ backgroundImage: "url" + `(${bannerImage.src})` }}
			>
				<div className="gradient-overlay" />
				<div className="sec-wp">
					<Container>
						<Row>
							<Col lg={10}>
								<div
									className="banner-text wow fadeup-animation"
									data-wow-duration="1s"
									data-wow-delay="0.1s"
								>
									<h1 className="h1-title title-ani">
										next level of <span>interior design.</span>
									</h1>
									<p>
										consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
									</p>
									<div className="banner-btn">
										<Fancybox
											options={{
												Carousel: {
													infinite: false
												}
											}}
										>
											<Link
												title="View Project"
												href="/projects"
												className="sec-btn"
											>
												View Project
											</Link>
											<Link
												title="Play"
												href="../../videos/banner-video.mp4"
												className="play-btn"
												data-fancybox="video"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="18"
													viewBox="0 0 30 34.397"
												>
													<path
														d="M39.33,11.98a1.079,1.079,0,1,0-1.142,1.831,3.992,3.992,0,0,1,0,6.774l-17.7,11.037a3.992,3.992,0,0,1-6.1-3.387V6.162a3.992,3.992,0,0,1,6.1-3.387L30.792,9.2a1.079,1.079,0,1,0,1.142-1.831L21.63.944a6.15,6.15,0,0,0-9.4,5.218V28.235a6.073,6.073,0,0,0,3.166,5.377,6.074,6.074,0,0,0,6.238-.159l17.7-11.037a6.15,6.15,0,0,0,0-10.437Z"
														transform="translate(-12.226 0)"
														fill="var(--primary-color)"
													/>
												</svg>
											</Link>
										</Fancybox>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</section>
		</>
	);
}
