import { Calendar, Code2, Layers3 } from "lucide-react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
	return (
		<div id="projects" className="bg-gray-800 pt-5 md:pt-22 pb-20">
			<div className="max-w-7xl mx-auto px-5 lg:px-0 space-y-15">
				{/* Stats Card Container */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					{/* Stats Card 1 */}
					<div className="p-6 rounded-2xl bg-zinc-900/50 border hover:border-indigo-400 duration-75 transition-colors flex items-center gap-5">
						<span className="rounded-xl p-3 bg-blue-200">
							<Layers3 className="h-7 w-auto text-blue-500" />
						</span>
						<div>
							<h2 className="text-3xl font-bold text-white">10+</h2>
							<p className="text-zinc-500 text-sm">Projects</p>
						</div>
					</div>

					{/* Stats Card 2 */}
					<div className="p-6 rounded-2xl bg-zinc-900/50 border hover:border-indigo-400 duration-75 transition-colors flex items-center gap-5">
						<span className="rounded-xl p-3 bg-green-100">
							<Code2 className="h-7 w-auto text-green-500" />
						</span>
						<div>
							<h2 className="text-3xl font-bold text-white">15+</h2>
							<p className="text-zinc-500 text-sm">Technologies</p>
						</div>
					</div>

					{/* Stast Card 3 */}
					<div className="p-6 rounded-2xl bg-zinc-900/50 border hover:border-indigo-400 duration-75 transition-colors flex items-center gap-5">
						<span className="rounded-xl p-3 bg-purple-200">
							<Calendar className="h-7 w-auto text-purple-500" />
						</span>
						<div>
							<h2 className="text-3xl font-bold text-white">3+</h2>
							<p className="text-zinc-500 text-sm">Years Experience</p>
						</div>
					</div>
				</div>

				{/* Projects Showcase Title */}
				<div className="max-w-xl mx-auto flex justify-center">
					<div className="flex items-center">
						<span className="w-24 h-1 bg-linear-to-r from-transparent to-blue-500"></span>
						<span className="bg-blue-500 text-white font-bold text-sm md:text-xl px-5 py-2 rounded-full border border-zinc-400">
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

					<p className="mt-2 max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed font-medium">
						A selection of high-impact digital solutions, built with focus
						on scalability, performance, and exceptional user experience.
					</p>
				</div>

				{/* Projects Card Container */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</div>
	);
};

export default Projects;
