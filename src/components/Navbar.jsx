"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { BiMoon } from "react-icons/bi";
import { RiMenuFill, RiMenuFold2Fill } from "react-icons/ri";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 z-50">
			<header className="backdrop-blur-xs bg-black/5 p-1 md:p-2 border border-gray-400 rounded-full flex items-center justify-around gap-3">
				{/* navigation links */}

				<ul className="flex items-center justify-center gap-1">
					<li>
						<Link href="#projects">
							<Button
								variant="ghost"
								className={
									"font-mono btn-ghost text-zinc-500 hover:text-blue-900"
								}
							>
								Projects
							</Button>
						</Link>
					</li>
					<li>
						<Link href="#skills">
							<Button
								variant="ghost"
								className={
									"font-mono btn-ghost text-zinc-500 hover:text-blue-900"
								}
							>
								Skills
							</Button>
						</Link>
					</li>
					<li>
						<Link href="#about">
							<Button
								variant="ghost"
								className={
									"font-mono btn-ghost text-zinc-500 hover:text-blue-900"
								}
							>
								About
							</Button>
						</Link>
					</li>
				</ul>

				{/* Divider */}
				<div className="border-r border-zinc-500 h-5"></div>

				{/* Learge Screen Button */}
				<div className="hidden lg:flex gap-2 items-center">
					<a href={"#contact-me"}>
						<Button
							className={
								"font-mono text-white bg-blue-500 hover:scale-95 transition-all duration-300 hover:bg-zinc-500"
							}
						>
							Contact
						</Button>
					</a>

					<Button
						className={
							"font-mono text-white bg-blue-500 hover:scale-95 transition-all duration-300 hover:bg-zinc-500"
						}
					>
						Download CV
					</Button>

					<span className="p-1 rounded-full border border-zinc-500 text-zinc-300 flex items-center hover:scale-95 transition-all duration-300">
						<BiMoon className="w-6 h-6" />
					</span>
				</div>

				{/* Conditional render - menu icon */}
				<div
					className={`lg:hidden p-3 relative`}
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? (
						<RiMenuFold2Fill className="w-5 h-5 text-zinc-500"></RiMenuFold2Fill>
					) : (
						<RiMenuFill className="w-5 h-5 text-zinc-500"></RiMenuFill>
					)}
				</div>
			</header>

			{/* Dropdown - Mobile Menu */}
			<div
				className={`lg:hidden absolute right-8.5 mt-2 z-50 ${
					isOpen
						? "opacity-100 transition-all duration-300 translate-y-0 scale-100"
						: "opacity-0 transition-all duration-300 -translate-y-3 scale-95 pointer-events-none"
				}`}
			>
				<div className="flex items-center p-1 lg:p-2 gap-2 backdrop-blur-xs bg-black/5 border border-gray-400 rounded-full">
					<div className="flex justify-center">
						<a href={"#contact-me"}>
							<Button
								className={
									"font-mono text-white bg-blue-500 hover:scale-95 transition-all duration-300 hover:bg-zinc-500"
								}
							>
								Contact
							</Button>
						</a>
					</div>

					<div className="flex justify-center">
						<Button
							className={
								"font-mono text-white bg-blue-500 hover:scale-95 transition-all duration-300 hover:bg-zinc-500"
							}
						>
							Download CV
						</Button>
					</div>

					<div className="flex justify-center">
						<span className="p-2 rounded-full border border-zinc-500 text-zinc-300 flex items-center hover:scale-95 transition-all duration-300">
							<BiMoon className="w-6 h-6" />
						</span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
