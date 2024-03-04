import Image from "next/image";
import Link from "next/link";
import recentPost1 from "@/images/recent-posts-1.jpg";
import recentPost2 from "@/images/recent-posts-2.jpg";
import recentPost3 from "@/images/recent-posts-3.jpg";

export default function BlogSidebar() {
	return (
		<>
			<div
				className="widget-area light-bg wow right-animation"
				data-wow-duration="1s"
				data-wow-delay="0.1s"
			>
				<div className="widget-search mb-4">
					<form className="subscribe-form search-form">
						<div className="form-input-wp">
							<input
								type="search"
								className="form-input "
								placeholder="Search…"
								required=""
							/>
							<div className="ani-line"></div>
							<button>
								<i className="fas fa-search"></i>
							</button>
						</div>
					</form>
				</div>
				<div className="widget widget-categories mb-4">
					<h2 className="widget-title h3-title mb-3">Categories</h2>
					<ul>
						<li>
							<Link href="#">
								All <span>(10)</span>
							</Link>
						</li>
						<li>
							<Link href="#">
								marketing <span>(5)</span>
							</Link>
						</li>
						<li>
							<Link href="#">
								informational <span>(8)</span>
							</Link>
						</li>
						<li>
							<Link href="#">
								Uncategorized <span>(3)</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="widget-recent-entries mb-4">
					<h2 className="widget-title h3-title mb-3">Recent Posts</h2>
					<Link
						href="#"
						className="widget-recent-post"
					>
						<div className="widget-recent-post-img">
							<Image
								src={recentPost1}
								alt="Post"
							/>
						</div>

						<h2 className="h5-title">Est placerat in egestas erat imperdiet</h2>
					</Link>

					<Link
						href="#"
						className="widget-recent-post"
					>
						<div className="widget-recent-post-img">
							<Image
								src={recentPost2}
								alt="Post"
							/>
						</div>

						<h2 className="h5-title">Lorem ipsum dolor sit amet, consectetur</h2>
					</Link>

					<Link
						href="#"
						className="widget-recent-post"
					>
						<div className="widget-recent-post-img">
							<Image
								src={recentPost3}
								alt="Post"
							/>
						</div>

						<h2 className="h5-title">Duis ultricies lacus sed turpis tincidunt</h2>
					</Link>
				</div>

				<div className="widget-tags mb-4">
					<h2 className="widget-title h3-title mb-3">Tags</h2>
					<ul>
						<li>
							<Link href="#">Design</Link>
						</li>
						<li>
							<Link href="#">Interior design</Link>
						</li>
						<li>
							<Link href="#">Architecture</Link>
						</li>
						<li>
							<Link href="#">Interior</Link>
						</li>
						<li>
							<Link href="#">Commercial</Link>
						</li>
						<li>
							<Link href="#">Home interiors</Link>
						</li>
					</ul>
				</div>

				<div className="widget widget-categories">
					<h2 className="widget-title h3-title mb-3">Archives</h2>
					<ul>
						<li>
							<Link href="#">
								Jule 2010 <span>(25)</span>
							</Link>
						</li>
						<li>
							<Link href="#">
								Augest 2011 <span>(51)</span>
							</Link>
						</li>
						<li>
							<Link href="#">
								September 2012 <span>(18)</span>
							</Link>
						</li>
						<li>
							<Link href="#">
								October 2013 <span>(3)</span>
							</Link>
						</li>
						<li>
							<Link href="#">
								November 2014 <span>(14)</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
