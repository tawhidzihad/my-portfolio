import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiAward, FiCheckCircle, FiCode, FiCompass } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const SOCIAL_PROFILES = [
	{
		name: "GitHub",
		url: "https://github.com/tawhidzihad",
		icon: FaGithub,
		username: "@tawhidzihad",
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/tawhidulislamzihad",
		icon: FaLinkedin,
		username: "tawhidulislamzihad",
	},
	{
		name: "X (Twitter)",
		url: "https://x.com/tawhidzihad_dev",
		icon: FaXTwitter,
		username: "@tawhidzihad_dev",
	},
	{
		name: "LeetCode",
		url: "https://leetcode.com/u/tawhiddev/",
		icon: SiLeetcode,
		username: "tawhiddev",
	},
];

const highlights = [
	{
		icon: FiCode,
		title: "Clean Architecture",
		description: "Writing maintainable, modular, and well-tested code standards.",
	},
	{
		icon: FiCompass,
		title: "User-Centric Design",
		description: "Building responsive interfaces with thoughtful UX and accessibility.",
	},
	{
		icon: FiAward,
		title: "Continuous Learning",
		description: "Constantly expanding knowledge in Next.js, TypeScript, and modern tooling.",
	},
];

const About = () => {
	return (
		<section
			id="about"
			className="relative py-24 sm:py-28 transition-colors duration-300"
		>
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
					{/* Left Column: Text & Profile Info */}
					<div
						data-aos="fade-right"
						className="lg:col-span-7 space-y-7 text-center lg:text-left"
					>
						{/* Badge */}
						<div>
							<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
								About Me
							</span>
						</div>

						{/* Heading */}
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
							Dedicated to Crafting Exceptional{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400">
								Web Solutions.
							</span>
						</h2>

						{/* Bio Paragraphs */}
						<div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
							<p>
								Hello! I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Tawhidul Islam</strong>,
								a passionate Full Stack Web Developer based in Dhaka, Bangladesh. I specialize in building
								fast, resilient, and engaging web applications using the MERN and Next.js ecosystems.
							</p>
							<p>
								My approach focuses on writing clean, scalable code and delivering seamless user interfaces.
								Whether building full-featured web platforms like <span className="text-blue-600 dark:text-blue-400 font-medium">BookLend</span> or
								interactive social trackers like <span className="text-blue-600 dark:text-blue-400 font-medium">KeenKeeper</span>, I ensure every detail
								serves a clear purpose for users and businesses.
							</p>
						</div>

						{/* Highlights Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
							{highlights.map((item, idx) => {
								const ItemIcon = item.icon;
								return (
									<div
										key={idx}
										className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 text-left"
									>
										<div className="p-2 w-fit rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-2.5">
											<ItemIcon className="w-4 h-4" />
										</div>
										<h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
											{item.title}
										</h4>
										<p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
											{item.description}
										</p>
									</div>
								);
							})}
						</div>

						{/* Social Profiles Cards */}
						<div className="pt-2">
							<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 text-left">
								Connect Across Platforms
							</h4>
							<div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
								{SOCIAL_PROFILES.map((profile) => {
									const Icon = profile.icon;
									return (
										<a
											key={profile.name}
											href={profile.url}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700/60 transition-all hover:scale-[1.03]"
											aria-label={`Visit ${profile.name} profile`}
										>
											<Icon className="w-4 h-4" />
											<span>{profile.name}</span>
										</a>
									);
								})}
							</div>
						</div>
					</div>

					{/* Right Column: Image with Framing & Badges */}
					<div
						data-aos="fade-left"
						className="lg:col-span-5 flex justify-center items-center"
					>
						<div className="relative w-full max-w-sm">
							{/* Ambient Background Aura */}
							<div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/10 blur-2xl pointer-events-none" />

							{/* Image Container Card */}
							<div className="relative rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-3 shadow-xl overflow-hidden group">
								<div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950">
									<Image
										src="/images/tawhid.png"
										alt="Tawhidul Islam - Full Stack Web Developer"
										fill
										sizes="(max-width: 768px) 90vw, 400px"
										className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
										priority
									/>
								</div>

								{/* Floating Badge */}
								<div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-3 shadow-lg flex items-center gap-3">
									<div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
										<FiCheckCircle className="w-5 h-5" />
									</div>
									<div className="text-left">
										<p className="text-xs font-bold text-slate-900 dark:text-white">
											Tawhidul Islam
										</p>
										<p className="text-[11px] text-slate-500 dark:text-slate-400">
											Full Stack Web Developer
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
