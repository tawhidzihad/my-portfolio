import { Icon } from "@iconify/react";
import { Cpu, Layout, Server } from "lucide-react";

const skillCategories = [
	{
		id: "frontend",
		title: "Frontend Engineering",
		icon: Layout,
		iconColor: "text-blue-500",
		iconBg: "bg-blue-500/10",
		description: "Building responsive, modern, and accessible user interfaces.",
		skills: [
			{ name: "Next.js", icon: "devicon:nextjs" },
			{ name: "React", icon: "logos:react" },
			{ name: "TypeScript", icon: "skill-icons:typescript" },
			{ name: "JavaScript", icon: "skill-icons:javascript" },
			{ name: "HTML5", icon: "skill-icons:html" },
			{ name: "CSS3", icon: "skill-icons:css" },
		],
	},
	{
		id: "backend",
		title: "Backend & Database",
		icon: Server,
		iconColor: "text-emerald-500",
		iconBg: "bg-emerald-500/10",
		description: "Architecting reliable APIs, microservices, and databases.",
		skills: [
			{ name: "Node.js", icon: "devicon:nodejs" },
			{ name: "Express.js", icon: "skill-icons:expressjs-light" },
			{ name: "MongoDB", icon: "skill-icons:mongodb" },
			{ name: "JavaScript", icon: "skill-icons:javascript" },
			{ name: "TypeScript", icon: "skill-icons:typescript" },
			{ name: "NoSQL", icon: "griddy-icons:sql" },
		],
	},
	{
		id: "tools",
		title: "Tools & DevOps",
		icon: Cpu,
		iconColor: "text-purple-500",
		iconBg: "bg-purple-500/10",
		description: "Streamlining development, version control, and cloud deployments.",
		skills: [
			{ name: "Git", icon: "material-icon-theme:git" },
			{ name: "VS Code", icon: "devicon:vscode" },
			{ name: "Vercel", icon: "devicon:vercel" },
			{ name: "Postman", icon: "devicon:postman" },
			{ name: "Figma", icon: "devicon:figma" },
			{ name: "Windows", icon: "skill-icons:windows-dark" },
		],
	},
];

const Skills = () => {
	return (
		<section
			id="skills"
			className="relative py-24 sm:py-28 transition-colors duration-300"
		>
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
				{/* Section Header */}
				<div className="text-center max-w-2xl mx-auto space-y-3">
					<div data-aos="fade-up">
						<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
							Tech Arsenal
						</span>
					</div>

					<h2
						data-aos="fade-up"
						data-aos-delay="100"
						className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
					>
						Skills &amp;{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400">
							Expertise
						</span>
					</h2>

					<p
						data-aos="fade-up"
						data-aos-delay="150"
						className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
					>
						The core technologies, libraries, and workflows I leverage daily to build
						resilient web applications from conception to production.
					</p>
				</div>

				{/* Category Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, idx) => {
						const CategoryIcon = category.icon;
						return (
							<div
								key={category.id}
								data-aos="fade-up"
								data-aos-delay={idx * 100 + 50}
								className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-7 shadow-sm hover:shadow-lg hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm"
							>
								{/* Card Header */}
								<div className="flex items-center gap-3.5 mb-3">
									<div
										className={`p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 ${category.iconBg} ${category.iconColor}`}
									>
										<CategoryIcon className="w-5 h-5" />
									</div>
									<h3 className="text-xl font-bold text-slate-900 dark:text-white">
										{category.title}
									</h3>
								</div>

								<p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
									{category.description}
								</p>

								{/* Tech Items Grid */}
								<div className="grid grid-cols-3 gap-3 mt-auto">
									{category.skills.map((skill, sIdx) => (
										<div
											key={sIdx}
											className="group flex flex-col items-center justify-center p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 hover:border-blue-500/40 hover:bg-blue-50/50 dark:hover:bg-slate-800/60 transition-all duration-200"
										>
											<div className="w-10 h-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
												<Icon
													icon={skill.icon}
													width={32}
													height={32}
													className="w-8 h-8 object-contain"
												/>
											</div>
											<span className="mt-2 text-[11px] font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400">
												{skill.name}
											</span>
										</div>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
