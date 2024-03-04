import InnerBanner from "@/components/common/InnerBanner";
import bannerImage from "@/images/services-main-img.jpg";
import ServicesSection from "@/components/services/ServicesSection";
import ServicesDetail from "@/components/services/ServicesDetail";
import Process from "@/components/common/Process";
import Cta from "@/components/common/Cta";
import Reviews from "@/components/common/Reviews";
import Contact from "@/components/common/Contact";

export default function Services() {
	return (
		<>
			<InnerBanner
				title="Our Services"
				image={bannerImage.src}
			/>
			<ServicesSection />
			<ServicesDetail />
			<Process />
			<Cta />
			<Reviews />
			<Contact />
		</>
	);
}
