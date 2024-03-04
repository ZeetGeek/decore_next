import { Col, Container, Row } from "react-bootstrap";
import aboutImg1 from "@/images/about-img-1.jpg";
import aboutImg2 from "@/images/about-img-2.jpg";
import Link from "next/link";
import Fancybox from "@/components/common/Fancybox";

export default function AboutSection() {
	return (
		<section className="about-main-section section light-bg">
			<Container>
				<Row>
					<Col lg={6}>
						<div
							className="about-main-text wow left-animation"
							data-wow-duration="1s"
							data-wow-delay="0.1s"
						>
							<h2 className="h2-title h2-without-line">History of our creation</h2>
							<p>
								it dolor sit, amet consectetur adipisicing elit. Hic neque iusto, inventore consequatur voluptates iste ex nesciunt illum doloremque adipisci laborum consequuntur repellat odio eaque vero
								voluptate modi assumenda? Laborum quo asperiores et ad. Numquam, accusamus? Qui veritatis ipsam explicabo natus voluptates minus? Mollitia, obcaecati deleniti. Expedita quis ut porro incidunt
								officia doloremque repellendus libero veniam et, architecto ea consequuntur labore dicta? Tempora labore hic necessitatibus porro, exercitationem, saepe sit suscipit assumenda pariatur nisi
								placeat. Magnam molestias ea dicta excepturi, sequi quaerat fuga ducimus deserunt. Ipsum nostrum sed explicabo debitis ratione est aspernatur quasi, nemo hic.
							</p>
						</div>
					</Col>
					<Col lg={6}>
						<div
							className="about-img-wp wow right-animation"
							data-wow-duration="1s"
							data-wow-delay="0.2s"
						>
							<div
								className="about-page-img"
								style={{ backgroundImage: "url" + `('${aboutImg1.src}')` }}
							>
								<Fancybox
									options={{
										Carousel: {
											infinite: false
										}
									}}
								>
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
											></path>
										</svg>
									</Link>
								</Fancybox>
							</div>
							<div
								className="about-page-img"
								style={{ backgroundImage: "url" + `('${aboutImg2.src}')` }}
							></div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
