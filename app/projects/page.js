import InnerBanner from "@/components/common/InnerBanner";
import ProjectsList from "@/components/projects/ProjectsList";
import bannerImage from "@/images/services-main-img.jpg";

export default function Projects() {
	return (
		<>
			<InnerBanner
				title="Our Projects"
				image={bannerImage.src}
			/>
			<ProjectsList />
		</>
	);
}
