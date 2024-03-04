import Blogs from "@/components/blog/Blogs";
import Contact from "@/components/common/Contact";
import InnerBanner from "@/components/common/InnerBanner";
import Reviews from "@/components/common/Reviews";
import bannerImage from "@/images/blog-banner-img.jpg";

export default function BlogPage() {
	return (
		<>
			<InnerBanner
				title="Blog"
				image={bannerImage.src}
			/>
			<Blogs />
			<Reviews />
			<Contact />
		</>
	);
}
