import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiArrowUp, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const navLinks = [
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "About", href: "#about" },
	{
		label: "Contact",
		href: "https://www.linkedin.com/in/tawhidulislamzihad",
		external: true,
	},
	{
		label: "Resume",
		href: "https://drive.google.com/file/d/1kmbuew2oYSq2H2zX8i8TItocUjf8OCuY/view",
		external: true,
	},
];

const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/tawhidzihad",
		icon: FaGithub,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/tawhidulislamzihad",
		icon: FaLinkedin,
	},
	{
		name: "X (Twitter)",
		href: "https://x.com/tawhidzihad_dev",
		icon: FaXTwitter,
	},
	{
		name: "LeetCode",
		href: "https://leetcode.com/u/tawhiddev/",
		icon: SiLeetcode,
	},
];

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-12">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
					{/* Brand Column */}
					<div className="md:col-span-5 space-y-4">
						<Link
							href="/"
							className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
						>
							<Image
								src="/images/td-logo.png"
								alt="Tawhid Dev Logo"
								width={42}
								height={42}
								className="rounded-xl shadow-sm"
							/>
							<span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
								Tawhid<span className="text-blue-600 dark:text-blue-400"> Zihad</span>
							</span>
						</Link>

						<p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
							Full Stack Web Developer specializing in Next.js, React, Node.js, and MongoDB.
							Building scalable, reliable, and user-friendly digital products.
						</p>

						<div className="flex items-center gap-2 pt-2">
							{socialLinks.map((item) => {
								const Icon = item.icon;
								return (
									<a
										key={item.name}
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={item.name}
										className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all hover:scale-105"
									>
										<Icon className="w-4 h-4" />
									</a>
								);
							})}
						</div>
					</div>

					{/* Navigation Links Column */}
					<div className="md:col-span-3 space-y-4">
						<h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
							Navigation
						</h3>

						<ul className="space-y-2.5">
							{navLinks.map((link) => (
								<li key={link.label}>
									{link.external ? (
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
										>
											{link.label}
										</a>
									) : (
										<Link
											href={link.href}
											className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
										>
											{link.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>

					{/* Contact Column */}
					<div className="md:col-span-4 space-y-4">
						<h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
							Get In Touch
						</h3>

						<div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
							<a
								href="mailto:mdtawhidulislamzihad39@gmail.com"
								className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
							>
								<FiMail className="w-4 h-4 text-blue-500 shrink-0" />
								<span>mdtawhidulislamzihad39@gmail.com</span>
							</a>

							<a
								href="tel:+8801704725639"
								className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
							>
								<FiPhone className="w-4 h-4 text-emerald-500 shrink-0" />
								<span>+8801704725639</span>
							</a>

							<a
								href="https://maps.app.goo.gl/eegscRsMgdqWcdqw7"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
							>
								<FiMapPin className="w-4 h-4 text-purple-500 shrink-0" />
								<span>Bogura, Bangladesh</span>
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
					<p>© {currentYear} Tawhidul Islam. All rights reserved.</p>

					<div className="flex items-center gap-6">
						<a
							href="#hero"
							className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
							aria-label="Back to top"
						>
							Back to top
							<FiArrowUp className="w-3.5 h-3.5" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
