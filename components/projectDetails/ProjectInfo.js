import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import blogImage1 from "@/images/blog-single-1.jpg";
import blogImage2 from "@/images/blog-single-2.jpg";
import blogImage3 from "@/images/blog-single-3.jpg";
import blogImage4 from "@/images/blog-single-4.jpg";
import blogNext from "@/images/blog-next.jpg";
import blogPrev from "@/images/blog-prev.jpg";
import Fancybox from "../common/Fancybox";

export default function ProjectInfo() {
	return (
		<>
			<section className="project-details-sec section">
				<Container>
					<Row>
						<Col lg={8}>
							<div
								className="project-details-text wow left-animation"
								data-wow-duration="1s"
								data-wow-delay="0.1s"
							>
								<p>
									Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Massa tincidunt dui ut ornare lectus sit amet. Enim sit amet venenatis urna cursus. Viverra aliquet eget sit amet tellus
									cras. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Neque vitae tempus quam pellentesque. Nulla facilisi etiam dignissim diam quis enim lobortis. Turpis nunc eget lorem dolor
									sed viverra ipsum nunc aliquet. Pharetra diam sit amet nisl. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.Amet mauris commodo quis imperdiet massa. Auctor eu augue ut
									lectus arcu bibendum. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet nisl purus in mollis nunc sed id semper risus.
								</p>
								<p>
									Habitant morbi tristique senectus et netus et malesuada fames. Magna fringilla urna porttitor rhoncus dolor purus non enim. Consectetur libero id faucibus nisl. Tincidunt eget nullam non
									nisi. Cum sociis natoque penatibus et magnis dis parturient. Gravida cum sociis natoque penatibus et magnis. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Non tellus orci ac
									auctor augue mauris augue. Quis lectus nulla at volutpat diam ut. Sit amet dictum sit amet justo donec enim diam. Nulla facilisi nullam vehicula ipsum a arcu cursus. Ornare massa eget
									egestas purus viverra accumsan in. Potenti nullam ac tortor vitae purus faucibus ornare. Ullamcorper a lacus vestibulum sed arcu.
								</p>
							</div>
						</Col>
						<Col lg={4}>
							<div
								className="project-details-box wow right-animation"
								data-wow-duration="1s"
								data-wow-delay="0.2s"
							>
								<ul>
									<li>
										<h4>Object type:</h4>
										<p>Interior design</p>
									</li>
									<li>
										<h4>Area:</h4>
										<p> 2 589.42 ft</p>
									</li>
									<li>
										<h4>Term of works:</h4>
										<p>3 months</p>
									</li>
									<li>
										<h4>Budget:</h4>
										<p>$400 / ft</p>
									</li>
									<li>
										<h4>Location:</h4>
										<p>Italy</p>
									</li>
								</ul>
							</div>
						</Col>
					</Row>

					<Fancybox
						options={{
							Carousel: {
								infinite: false
							}
						}}
					>
						<Row className="my-5">
							<Col
								sm={6}
								className="wow fadeup-animation"
								data-wow-duration="1s"
								data-wow-delay="0.1s"
							>
								<Link
									href={blogImage1.src}
									className="project-image-wp"
									data-fancybox="blog-single"
								>
									<div
										className="project-image"
										style={{ backgroundImage: "url" + `(${blogImage1.src})` }}
									></div>
								</Link>
							</Col>
							<Col
								sm={6}
								className="wow fadeup-animation"
								data-wow-duration="1s"
								data-wow-delay="0.2s"
							>
								<Link
									href={blogImage2.src}
									className="project-image-wp"
									data-fancybox="blog-single"
								>
									<div
										className="project-image"
										style={{ backgroundImage: "url" + `(${blogImage2.src})` }}
									></div>
								</Link>
							</Col>
							<Col
								sm={6}
								className="wow fadeup-animation"
								data-wow-duration="1s"
								data-wow-delay="0.3s"
							>
								<Link
									href={blogImage3.src}
									className="project-image-wp"
									data-fancybox="blog-single"
								>
									<div
										className="project-image"
										style={{ backgroundImage: "url" + `(${blogImage3.src})` }}
									></div>
								</Link>
							</Col>
							<Col
								sm={6}
								className="wow fadeup-animation"
								data-wow-duration="1s"
								data-wow-delay="0.4s"
							>
								<Link
									href={blogImage4.src}
									className="project-image-wp"
									data-fancybox="blog-single"
								>
									<div
										className="project-image"
										style={{ backgroundImage: "url" + `(${blogImage4.src})` }}
									></div>
								</Link>
							</Col>
						</Row>
					</Fancybox>

					<Row>
						<Col
							lg={12}
							className="wow fadeup-animation"
							data-wow-duration="1s"
							data-wow-delay="0.5s"
						>
							<p>
								Risus quis varius quam quisque. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Senectus et netus et malesuada
								fames ac turpis egestas sed. Auctor urna nunc id cursus metus aliquam eleifend mi. Bibendum neque egestas congue quisque egestas diam in. Commodo quis imperdiet massa tincidunt nunc. Non nisi
								est sit amet facilisis magna. Sed cras ornare arcu dui vivamus. Arcu cursus vitae congue mauris.
							</p>
							<p>
								Integer malesuada nunc vel risus. Magna ac placerat vestibulum lectus mauris ultrices. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Id nibh tortor id aliquet lectus proin
								nibh. Tortor posuere ac ut consequat semper. Aenean euismod elementum nisi quis eleifend quam adipiscing. Nisl purus in mollis nunc sed id semper risus. In hendrerit gravida rutrum quisque non
								tellus orci ac. Leo a diam sollicitudin tempor id eu nisl. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Id aliquet lectus proin nibh nisl. Pellentesque eu tincidunt tortor
								aliquam nulla facilisi cras fermentum.
							</p>
							<p>
								Nisl tincidunt eget nullam non nisi est sit amet facilisis. Sit amet dictum sit amet justo donec. Sed felis eget velit aliquet sagittis id consectetur purus. Aenean et tortor at risus viverra
								adipiscing at. Tortor dignissim convallis aenean et tortor at risus. Faucibus purus in massa tempor nec. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper dignissim cras tincidunt
								lobortis feugiat vivamus at augue eget. Magna fermentum iaculis eu non diam. Blandit cursus risus at ultrices mi. Sit amet dictum sit amet. Quis lectus nulla at volutpat diam. Elementum eu
								facilisis sed odio morbi quis.
							</p>
							<div className="ani-line mt-5" />
							<div className="social-icon mt-4">
								<ul>
									<li>
										<Link
											title="Follow On Facebook"
											href="https://www.facebook.com/"
											target="_blank"
										>
											<i className="fab fa-facebook-f"></i>
										</Link>{" "}
									</li>
									<li>
										<Link
											title="Follow On Twitter"
											href="https://twitter.com/"
											target="_blank"
										>
											<i className="fab fa-twitter"></i>
										</Link>
									</li>
									<li>
										<Link
											title="Follow On Instagram"
											href="https://www.instagram.com/"
											target="_blank"
										>
											<i className="fab fa-instagram"></i>
										</Link>
									</li>
									<li>
										<Link
											title="Follow On Linkedin"
											href="https://in.linkedin.com/"
											target="_blank"
										>
											<i className="fab fa-linkedin-in"></i>
										</Link>
									</li>
								</ul>
							</div>
						</Col>
					</Row>

					<div className="section pb-0">
						<Row>
							<Col
								xs={6}
								className="wow left-animation"
								data-wow-duration="1s"
								data-wow-delay="0.2s"
							>
								<Link
									href="/project-details"
									className="project-nav"
								>
									<span style={{ backgroundImage: "url" + `('${blogNext.src}')` }}></span>
									<div className="project-overflow-text">
										<b>Next-</b> Cocktail Bar
									</div>
								</Link>
							</Col>
							<Col
								xs={6}
								className="wow left-animation"
								data-wow-duration="1s"
								data-wow-delay="0.2s"
							>
								<Link
									href="/project-details"
									className="project-nav next-project"
								>
									<div className="project-overflow-text">
										<b>Perv-</b> Hotel
									</div>
									<span style={{ backgroundImage: "url" + `('${blogPrev.src}')` }}></span>
								</Link>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
		</>
	);
}
