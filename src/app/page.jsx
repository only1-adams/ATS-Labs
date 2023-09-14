import HeroSection from "./components/HeroSection";
import IndustrySection from "./components/industries/IndustrySection";
import TandTSection from "./components/tools_and_technologies/TandTSection";
import OurBlogSection from "./components/blog/OurBlogSection";
import Button from "../components/Button";
import LetsTalkSection from "../components/LetsTalkSection";

export default function Home() {
	return (
		<main className="pt-[10rem] md:pt-[12rem]">
			<HeroSection />
			<IndustrySection />
			<TandTSection />
			<OurBlogSection />
			<LetsTalkSection />
		</main>
	);
}
