import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import BannerRightSideCard from "../BannerRightSideCard";
import TypeWriting from "../TypeWriting";

const SOCIAL_LINKS = [
	{
		name: "GitHub",
		url: "https://github.com/tawhidzihad",
		icon: FaGithub,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/tawhidulislamzihad",
		icon: FaLinkedin,
	},
	{
		name: "X (Twitter)",
		url: "https://x.com/tawhidzihad_dev",
		icon: FaXTwitter,
	},
	{
		name: "LeetCode",
		url: "https://leetcode.com/u/tawhiddev/",
		icon: SiLeetcode,
	},
];

const RESUME_LINK = "https://drive.google.com/file/d/1kmbuew2oYSq2H2zX8i8TItocUjf8OCuY/view";

const Banner = () => {
	return (
		<section id="hero" className="relative overflow-hidden pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 transition-colors duration-300">
			{/* Ambient Gradient & Grid Background */}
			<div className="absolute inset-0 portfolio-grid pointer-events-none opacity-60 dark:opacity-40" />
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-87.5 bg-linear-to-tr from-blue-500/15 via-indigo-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

			<div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
				<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
					{/* Left Content */}
					<div className="w-full lg:w-7/12 space-y-7 text-center lg:text-left">
						{/* Status Badge */}
						<div
							data-aos="fade-up"
							data-aos-duration="600"
							className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium tracking-wide shadow-sm">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
							</span>
							Available for new opportunities
						</div>

						{/* Headline */}
						<div data-aos="fade-up" data-aos-delay="100" className="space-y-3">
							<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
								Crafting Scalable{" "}
								<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400">
									Digital Web
								</span>{" "}
								Experiences.
							</h1>

							<div className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
								I&apos;m <span className="font-bold text-slate-900 dark:text-white">Tawhidul Islam</span>, a{" "}
								<TypeWriting />
							</div>
						</div>

						{/* Description */}
						<p
							data-aos="fade-up"
							data-aos-delay="200"
							className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
						>
							Specializing in modern full-stack development with Next.js, React, Node.js, and MongoDB.
							Passionate about building fast, clean, and accessible web solutions that deliver real impact.
						</p>

						{/* CTA Buttons */}
						<div
							data-aos="fade-up"
							data-aos-delay="300"
							className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1"
						>
							<Link
								href="#projects"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
							>
								View Projects
								<FiArrowRight className="w-4 h-4" />
							</Link>

							<a
								href="https://www.linkedin.com/in/tawhidulislamzihad"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
							>
								<FiMail className="w-4 h-4 text-blue-500" />
								Get in Touch
							</a>
						</div>

						{/* Social Icons Strip */}
						<div
							data-aos="fade-up"
							data-aos-delay="400"
							className="flex items-center justify-center lg:justify-start gap-3 pt-3"
						>
							<span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-2 uppercase tracking-wider">
								Connect:
							</span>
							{SOCIAL_LINKS.map((item) => {
								const Icon = item.icon;
								return (
									<a
										key={item.name}
										href={item.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={item.name}
										className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 hover:scale-110 shadow-sm transition-all duration-200"
									>
										<Icon className="w-4 h-4" />
									</a>
								);
							})}
						</div>
					</div>

					{/* Right 3D Interactive Showcase */}
					<div
						data-aos="fade-left"
						data-aos-delay="200"
						className="w-full lg:w-5/12 flex justify-center"
					>
						<BannerRightSideCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
