import About from "@/components/sections/About";
import Banner from "@/components/sections/Banner";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
	return (
		<>
			<Banner></Banner>
			<Projects></Projects>
			<Skills></Skills>
			<About></About>
		</>
	);
}
