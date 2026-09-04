"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiDownload, FiExternalLink, FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const navItems = [
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "About", href: "#about" },
];

const RESUME_LINK = "https://drive.google.com/file/d/1kmbuew2oYSq2H2zX8i8TItocUjf8OCuY/view";
const CONTACT_LINK = "https://www.linkedin.com/in/tawhidulislamzihad";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);

			const sections = ["projects", "skills", "about"];
			const scrollPosition = window.scrollY + 180;

			for (const section of sections) {
				const el = document.getElementById(section);
				if (el) {
					const top = el.offsetTop;
					const height = el.offsetHeight;
					if (scrollPosition >= top && scrollPosition < top + height) {
						setActiveSection(section);
						return;
					}
				}
			}
			if (window.scrollY < 200) {
				setActiveSection("");
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const closeMenu = () => setIsOpen(false);

	return (
		<nav
			className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl transition-all duration-300 ${scrolled ? "top-3" : "top-5"
				}`}
			aria-label="Main Navigation"
		>
			<div className="relative backdrop-blur-xl bg-white/10 dark:bg-slate-900/10 border border-slate-200/10 dark:border-slate-800/10 rounded-full px-4 py-2.5 shadow-lg shadow-black/5 dark:shadow-black/20 flex items-center justify-between">
				{/* Brand Logo / Home Link */}
				<Link
					href="/"
					className="group flex items-center gap-2 pl-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
					aria-label="Tawhidul Islam Portfolio Home"
				>
					<Image
						src="/images/td-logo.png"
						alt="Tawhid Dev Logo"
						width={42}
						height={42}
						className="bg-transparent"
					/>
				</Link>

				{/* Desktop Navigation Links */}
				<ul className="hidden md:flex items-center gap-1">
					{navItems.map((item) => {
						const isActive = activeSection === item.href.replace("#", "");
						return (
							<li key={item.href}>
								<Link
									href={item.href}
									className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${isActive
										? "bg-blue-500 text-white shadow-sm shadow-blue-500/30"
										: "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
										}`}
								>
									{item.label}
								</Link>
							</li>
						);
					})}
				</ul>

				{/* Desktop Actions */}
				<div className="hidden md:flex items-center gap-2.5">
					<a
						href={CONTACT_LINK}
						target="_blank"
						rel="noopener noreferrer"
						className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700/60 transition-all flex items-center gap-1.5"
					>
						Contact
						<FiExternalLink className="w-3 h-3 opacity-70" />
					</a>

					<a
						href={RESUME_LINK}
						target="_blank"
						rel="noopener noreferrer"
						className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/25 transition-all flex items-center gap-1.5 hover:scale-[1.02]"
					>
						<FiDownload className="w-3 h-3" />
						Resume
					</a>

					<div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-0.5" />

					<ThemeToggle />
				</div>

				{/* Mobile Controls */}
				<div className="flex md:hidden items-center gap-2">
					<ThemeToggle />

					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
						aria-label={isOpen ? "Close menu" : "Open menu"}
						aria-expanded={isOpen}
					>
						{isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
					</button>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			<div
				className={`md:hidden mt-2 backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-4 shadow-xl transition-all duration-300 origin-top ${isOpen
					? "opacity-100 scale-100 translate-y-0"
					: "opacity-0 scale-95 -translate-y-2 pointer-events-none select-none"
					}`}
			>
				<ul className="flex flex-col gap-1.5 pb-3 border-b border-slate-200 dark:border-slate-800">
					{navItems.map((item) => {
						const isActive = activeSection === item.href.replace("#", "");
						return (
							<li key={item.href}>
								<Link
									href={item.href}
									onClick={closeMenu}
									className={`block px-4 py-2 rounded-xl text-sm font-medium transition-colors ${isActive
										? "bg-blue-500 text-white font-semibold"
										: "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
										}`}
								>
									{item.label}
								</Link>
							</li>
						);
					})}
				</ul>

				<div className="pt-3 flex flex-col gap-2">
					<a
						href={CONTACT_LINK}
						target="_blank"
						rel="noopener noreferrer"
						onClick={closeMenu}
						className="w-full py-2 px-4 rounded-xl text-sm font-medium text-center text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
					>
						Contact on LinkedIn
						<FiExternalLink className="w-3.5 h-3.5" />
					</a>

					<a
						href={RESUME_LINK}
						target="_blank"
						rel="noopener noreferrer"
						onClick={closeMenu}
						className="w-full py-2 px-4 rounded-xl text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors flex items-center justify-center gap-2"
					>
						<FiDownload className="w-3.5 h-3.5" />
						Download Resume
					</a>
				</div>
			</div>
		</nav>
	);
}
