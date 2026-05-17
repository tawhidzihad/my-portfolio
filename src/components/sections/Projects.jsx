import { Button } from "@heroui/react";
import { Calendar, Code2, Layers3 } from "lucide-react";
import { FaPlus } from "react-icons/fa";
import ProjectCard from "../ProjectCard";

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: "BookLend",
			image: "https://i.ibb.co.com/S2hW5Gx/lqk-WNOj-KPfu-B.png",
			description:
				"Booklend is a digital book borrowing platform where users can browse, borrow, and manage books online. It features authentication, pricing plans, and activity tracking for a seamless user experience with responsive design.",
			technologies: [
				"JavaScript",
				"NextJS",
				"TailwindCSS",
				"DaisyUI",
				"MongoDB",
				"BetterAuth",
			],

			repoLink: "https://github.com/tawhidzihad/assignment-008-nextjs-app",
			liveLink: "https://book-lend-ten.vercel.app",
		},

		{
			id: 2,
			title: "KeenKeeper",
			image: "https://i.ibb.co.com/Jh6yR6V/Aa-lg-W4i-Sm67hl-NY4-Im-N-Q.png",
			description:
				"KeenKeeper is a modern social tracking app designed to help users maintain meaningful connections with their friends. It allows users to log interactions such as text messages, audio calls, and video calls, and visualize their communication history through a clean timeline interface. By keeping track of how often and how recently you connect with people, KeenKeeper helps ensure that no important relationship fades away over time.",
			technologies: [
				"JavaScript",
				"React",
				"TailwindCSS",
				"DaisyUI",
				"React Router",
				"Recharts",
			],

			repoLink: "https://github.com/tawhidzihad/assignment-007-react-app",
			liveLink: "https://kinkeeper-psi.vercel.app/",
		},

		{
			id: 3,
			title: "DigiTools",
			image: "https://i.ibb.co.com/p6CZfxXV/fw3y-O8n8-T7a-Qv3568nm-Qq-A.png",
			description:
				"DigiTools is a modern online platform created to offer access to high-quality premium digital tools at reasonable prices. The platform is developed to focus on delivering a high-class user experience with a clean interface",
			technologies: [
				"JSON File",
				"JavaScript",
				"React",
				"TailwindCSS",
				"DaisyUI",
				"React-Toastify",
			],

			repoLink: "https://github.com/tawhidzihad/assignment-006-react",
			liveLink: "https://digitoolspremium.netlify.app/",
		},
	];

	return (
		<div id="projects" className="bg-[#011026] pt-5 md:pt-22 pb-20">
			<div className="max-w-7xl mx-auto px-5 lg:px-0 space-y-12">
				{/* Stats Card Container */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					{/* Stats Card 1 */}
					<div className="px-5 py-3 rounded-2xl bg-blue-900/10 flex items-center gap-5">
						<span className="rounded-xl p-3 bg-blue-200">
							<Layers3 className="h-7 w-auto text-blue-500" />
						</span>
						<div>
							<h2 className="text-3xl font-bold text-white flex items-center gap-1">
								10 <FaPlus className="text-xs" />
							</h2>
							<p className="text-zinc-500 text-sm">Projects</p>
						</div>
					</div>

					{/* Stats Card 2 */}
					<div className="px-5 py-3 rounded-2xl bg-blue-900/10 flex items-center gap-5">
						<span className="rounded-xl p-3 bg-green-100">
							<Code2 className="h-7 w-auto text-green-500" />
						</span>
						<div className="space-y-1">
							<h2 className="text-3xl font-bold text-white flex items-center gap-1">
								15 <FaPlus className="text-xs" />
							</h2>
							<p className="text-zinc-500 text-sm">Technologies</p>
						</div>
					</div>

					{/* Stast Card 3 */}
					<div className="px-5 py-3 rounded-2xl bg-blue-900/10 flex items-center gap-5">
						<span className="rounded-xl p-3 bg-purple-200">
							<Calendar className="h-7 w-auto text-purple-500" />
						</span>
						<div className="space-y-1">
							<h2 className="text-3xl font-bold text-white flex items-center gap-1">
								3 <FaPlus className="text-xs" />
							</h2>
							<p className="text-zinc-500 text-sm">Years Experience</p>
						</div>
					</div>
				</div>

				{/* Projects Showcase Title */}
				<div className="max-w-xl mx-auto flex justify-center">
					<div className="flex items-center">
						<span className="w-24 h-1 bg-linear-to-r from-transparent to-blue-500"></span>

						<span className="bg-blue-500 text-white font-normal text-xs md:text-xl p-2 md:px-4 rounded-full">
							Projects Showcase
						</span>

						<span className="w-24 h-1 bg-linear-to-l from-transparent to-blue-500"></span>
					</div>
				</div>

				{/* Projects Title */}
				<div className="text-center">
					<p className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-4">
						Portfolio
					</p>

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
						Featured{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-800">
							Creations
						</span>
					</h2>

					<p className="mt-2 max-w-2xl mx-auto text-slate-400 md:text-lg leading-relaxed font-medium">
						A selection of high-impact digital solutions, built with focus
						on scalability, performance, and exceptional user experience.
					</p>
				</div>

				{/* Projects Card Container */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project}></ProjectCard>
					))}
				</div>

				<div className="flex justify-center items-center">
					<Button
						size="lg"
						className={
							"text-white bg-blue-500 hover:scale-95 transition-all duration-300 hover:bg-zinc-500 rounded-xl"
						}
					>
						Explore Full Archive
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Projects;
