// Google Fonts
import { Raleway, Anton } from "next/font/google";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Font Awesome 6 CSS
import "@/assets/fonts/font-awesome/css/all.min.scss";

// Swiper Slider CSS
import "swiper/scss";

// Global CSS
import "@/css/style.css";

// Components
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Brands from "@/components/common/Brands";

// Include Raleway Google Fonts
const raleway = Raleway({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--body-font"
});

// Include Anton Google Fonts
const anton = Anton({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--title-font"
});

// Custom Metadata
export const metadata = {
	title: "DeCore - Architecture & Interior Next.js Template",
	description: "DeCore - Architecture & Interior Next.js Template"
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${raleway.variable} ${anton.variable}`}
		>
			<body>
				<Header />
				{children}
				<Brands />
				<Footer />
			</body>
		</html>
	);
}
