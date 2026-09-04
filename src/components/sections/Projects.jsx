import { Calendar, Code2, ExternalLink, Layers3 } from "lucide-react";
import ProjectCard from "../ProjectCard";

const projects = [
	{
		id: 1,
		title: "Expense Tracker",
		image: "https://raw.githubusercontent.com/tawhidzihad/expense-tracker-app/refs/heads/main/public/preview.png",
		description: "A modern and responsive Expense Tracker web application built with Next.js, TypeScript, HeroUI, and Tailwind CSS. Easily manage your daily expenses by adding, updating, deleting, filtering, and visualizing expense data through an interactive pie chart.",
		technologies: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS v4", "HeroUI v3", "Next.js Server Actions", "React Hook Form", "Recharts"],
		repoLink: "https://github.com/tawhidzihad/expense-tracker-app",
		liveLink: "https://expense-tracking-app-by-tawhid.vercel.app/",
	},
	{
		id: 2,
		title: "StartupForge",
		image: "https://raw.githubusercontent.com/tawhidzihad/startupforge-client/refs/heads/main/public/images/banner-image.png",
		description: "StartupForge is a modern startup collaboration platform designed to connect startup founders with talented collaborators. Founders can create startup profiles, post opportunities, and build their dream teams, while collaborators can discover startups, apply for opportunities, and contribute to innovative projects.",
		technologies: ["Next.js 16", "React 19", "Tailwind CSS", "HeroUI v3", "Framer Motion", "Recharts", "Node.js", "Express.js", "MongoDB", "BetterAuth", "Google OAuth", "Stripe"],
		repoLink: "https://github.com/tawhidzihad/startupforge-client",
		liveLink: "https://startupforge-platform.vercel.app/",
	},
	{
		id: 3,
		title: "BookLend",
		image: "https://i.ibb.co.com/S2hW5Gx/lqk-WNOj-KPfu-B.png",
		description:
			"A full-featured digital book borrowing platform where users can browse, borrow, and manage books online. Features secure authentication, dynamic pricing plans, and real-time activity tracking.",
		technologies: [
			"Next.js",
			"JavaScript",
			"TailwindCSS",
			"DaisyUI",
			"MongoDB",
			"BetterAuth",
		],
		repoLink: "https://github.com/tawhidzihad/assignment-008-nextjs-app",
		liveLink: "https://book-lend-ten.vercel.app",
	},
	{
		id: 4,
		title: "KeenKeeper",
		image: "https://i.ibb.co.com/Jh6yR6V/Aa-lg-W4i-Sm67hl-NY4-Im-N-Q.png",
		description:
			"A modern social tracking web application designed to help users maintain meaningful connections. Log interactions across calls and messages with intuitive timeline analytics and charts.",
		technologies: [
			"React",
			"JavaScript",
			"TailwindCSS",
			"DaisyUI",
			"React Router",
			"Recharts",
		],
		repoLink: "https://github.com/tawhidzihad/assignment-007-react-app",
		liveLink: "https://kinkeeper-psi.vercel.app/",
	},
	{
		id: 5,
		title: "DigiTools",
		image: "https://i.ibb.co.com/p6CZfxXV/fw3y-O8n8-T7a-Qv3568nm-Qq-A.png",
		description:
			"A sleek digital marketplace offering curated premium tools and subscriptions at accessible prices, built with responsive UX and smooth notification flows.",
		technologies: [
			"React",
			"JavaScript",
			"TailwindCSS",
			"DaisyUI",
			"React-Toastify",
		],
		repoLink: "https://github.com/tawhidzihad/assignment-006-react",
		liveLink: "https://digitoolspremium.netlify.app/",
	},
	{
		id: 6,
		title: "Samiul TubeGrowth Studio",
		image: "https://raw.githubusercontent.com/tawhidzihad/samiul-portfolio-client/refs/heads/main/public/preview.png",
		description: "A modern and fully responsive personal portfolio website built with Next.js, showcasing professional services, portfolio projects, client reviews, and an admin dashboard for content management.",
		technologies: [
			"Next.js 16",
			"React 19",
			"JavaScript",
			"TailwindCSS",
			"Framer Motion",
			"Swiper.js",
			"HeroUI",
			"Next Themes",
			"JWT Authentication",
			"Better Auth",
			"MongoDB",
		],
		repoLink: "https://github.com/tawhidzihad/samiul-portfolio-client",
		liveLink: "https://samiul-tubegrowth-studio.vercel.app",
	},
];

const stats = [
	{
		id: 1,
		value: "10+",
		label: "Projects Completed",
		icon: Layers3,
		color: "text-blue-600 dark:text-blue-400",
		bg: "bg-blue-500/10 dark:bg-blue-500/15",
	},
	{
		id: 2,
		value: "15+",
		label: "Technologies Mastered",
		icon: Code2,
		color: "text-emerald-600 dark:text-emerald-400",
		bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
	},
	{
		id: 3,
		value: "3+",
		label: "Years Experience",
		icon: Calendar,
		color: "text-purple-600 dark:text-purple-400",
		bg: "bg-purple-500/10 dark:bg-purple-500/15",
	},
];

const Projects = () => {
	return (
		<section
			id="projects"
			className="relative py-24 sm:py-28 transition-colors duration-300"
		>
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
				{/* Stats Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
					{stats.map((stat, idx) => {
						const Icon = stat.icon;
						return (
							<div
								key={stat.id}
								data-aos="fade-up"
								data-aos-delay={idx * 100}
								className="flex items-center gap-5 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-slate-900/60 shadow-sm backdrop-blur-sm"
							>
								<div className={`p-3.5 rounded-xl ${stat.bg} ${stat.color}`}>
									<Icon className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
										{stat.value}
									</h3>
									<p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
										{stat.label}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				{/* Section Header */}
				<div className="text-center max-w-2xl mx-auto space-y-3">
					<div data-aos="fade-up">
						<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
							Portfolio
						</span>
					</div>

					<h2
						data-aos="fade-up"
						data-aos-delay="100"
						className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
					>
						Featured{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400">
							Creations
						</span>
					</h2>

					<p
						data-aos="fade-up"
						data-aos-delay="150"
						className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
					>
						A curated selection of high-impact digital products, built with precision,
						scalability, and exceptional user experience.
					</p>
				</div>

				{/* Project Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, idx) => (
						<ProjectCard key={project.id} project={project} index={idx} />
					))}
				</div>

				{/* Working Archive CTA */}
				<div
					data-aos="fade-up"
					data-aos-delay="200"
					className="flex justify-center pt-4"
				>
					<a
						href="https://github.com/tawhidzihad?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
					>
						Explore Full GitHub Archive
						<ExternalLink className="w-4 h-4 text-blue-500" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
