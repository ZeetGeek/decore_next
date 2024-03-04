import InnerBanner from "@/components/common/InnerBanner";
import bannerImage from "@/images/contact-banner-img.jpg";
import ContactForm from "@/components/contact/ContactForm";
import Counter from "@/components/common/Counter";

export default function ContactPage() {
	return (
		<>
			<InnerBanner
				title="Contact"
				image={bannerImage.src}
			/>
			<ContactForm />
			<Counter />
		</>
	);
}
