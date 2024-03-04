import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Fancybox from "../common/Fancybox";
import blogImage1 from "@/images/single-post-img-1.jpg";
import blogImage2 from "@/images/single-post-img-2.jpg";
import BlogSidebar from "./BlogSidebar";

export default function BlogContent() {
	return (
		<>
			<section className="single-blog-sec section">
				<Container>
					<Row>
						<Col lg={8}>
							<div
								className="single-blog-text wow left-animation"
								data-wow-duration="1s"
								data-wow-delay="0.1s"
							>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita aliquam eligendi architecto deserunt cupiditate, enim quo tempore ipsam nisi quae molestiae voluptas officiis
									consequuntur quam at numquam recusandae, dicta maiores porro repellat illum maxime. Cum, animi natus autem nisi hic voluptatum fuga illum corrupti non? Quasi consequuntur sit aliquid
									corrupti. Eaque eligendi incidunt placeat, dolores iusto perferendis nobis repellendus?
								</p>
								<p>
									Fringilla ut morbi tincidunt augue interdum <Link href="#">velit euismod. Non nisi est sit amet facilisis magna</Link>. Augue eget arcu dictum varius duis. Erat nam at lectus urna duis
									convallis convallis tellus. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Egestas tellus
									rutrum tellus pellentesque. At volutpat diam ut venenatis tellus in metus. Ultricies mi quis hendrerit dolor. Tempor nec feugiat nisl pretium. Molestie ac feugiat sed lectus vestibulum.
									Ante metus dictum at tempor commodo ullamcorper a.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, reiciendis. Tempora officia similique architecto sed laboriosam reprehenderit amet quas mollitia temporibus delectus
									voluptates repellendus dicta, ad velit possimus eligendi nesciunt?
								</p>
								<Fancybox
									options={{
										Carousel: {
											infinite: false
										}
									}}
								>
									<Row>
										<Col
											sm={6}
											className="wow fadeup-animation"
											data-wow-duration="1s"
											data-wow-delay="0.1s"
										>
											<Link
												href={blogImage1.src}
												className="single-post-img-wp my-4"
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
												className="single-post-img-wp my-4"
												data-fancybox="blog-single"
											>
												<div
													className="project-image"
													style={{ backgroundImage: "url" + `(${blogImage2.src})` }}
												></div>
											</Link>
										</Col>
									</Row>
								</Fancybox>
								<p>
									Luctus accumsan tortor posuere ac ut consequat semper viverra. At volutpat diam ut venenatis tellus in metus vulputate eu. Dapibus ultrices in iaculis nunc sed augue. Sed arcu non odio
									euismod lacinia at quis risus sed. At risus viverra adipiscing at in tellus integer. Fusce ut placerat orci nulla pellentesque dignissim enim. Elit pellentesque habitant morbi tristique.
									Faucibus turpis in eu mi bibendum. Tempus urna et pharetra pharetra. Maecenas sed enim ut sem. Lectus urna duis convallis convallis tellus id interdum. Varius vel pharetra vel turpis nunc
									eget lorem dolor. Id nibh tortor id aliquet lectus proin nibh. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Donec enim diam vulputate ut pharetra sit. Consequat ac felis
									donec et odio pellentesque diam.
								</p>
							</div>
						</Col>
						<Col lg={4}>
							<BlogSidebar />
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}
