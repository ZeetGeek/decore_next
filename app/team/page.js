import Contact from "@/components/common/Contact";
import InnerBanner from "@/components/common/InnerBanner";
import Reviews from "@/components/common/Reviews";
import TeamList from "@/components/team/TeamList";
import bannerImage from "@/images/team-banner-img.jpg";

export default function TeamPage() {
	return (
		<>
			<InnerBanner
				title="Our Team"
				image={bannerImage.src}
			/>
			<TeamList />
			<Reviews />
			<Contact />
		</>
	);
}
