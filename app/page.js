import About from "@/components/home/About";
import Cta from "@/components/common/Cta";
import Cta2 from "@/components/common/Cta2";
import MainBanner from "@/components/home/MainBanner";
import Process from "@/components/common/Process";
import Project from "@/components/home/Project";
import Services from "@/components/home/Services";
import Team from "@/components/common/Team";
import Counter from "@/components/common/Counter";
import Reviews from "@/components/common/Reviews";
import Blogs from "@/components/home/Blogs";
import Contact from "@/components/common/Contact";

export default function Home() {
	return (
		<>
			<MainBanner />
			<About />
			<Process />
			<Cta />
			<Services />
			<Project />
			<Cta2 />
			<Team />
			<Counter />
			<Reviews />
			<Blogs />
			<Contact />
		</>
	);
}
