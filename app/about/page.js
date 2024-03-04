import AboutSection from "@/components/about/AboutSection";
import Contact from "@/components/common/Contact";
import Counter from "@/components/common/Counter";
import Cta from "@/components/common/Cta";
import InnerBanner from "@/components/common/InnerBanner";
import Process from "@/components/common/Process";
import Reviews from "@/components/common/Reviews";
import Team from "@/components/common/Team";
import bannerImage from "@/images/about-main-img.jpg";

export default function About() {
	return (
		<>
			<InnerBanner
				title="About Us"
				image={bannerImage.src}
			/>
			<AboutSection />
			<Counter />
			<Process />
			<Team />
			<Cta />
			<Reviews />
			<Contact />
		</>
	);
}
