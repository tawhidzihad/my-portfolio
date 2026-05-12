"use client";

import { useState } from "react";
import { BiMoon } from "react-icons/bi";
import { RiMenuFill, RiMenuFold2Fill } from "react-icons/ri";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 z-50">
			<header className="backdrop-blur-xs bg-black/5 p-1 md:p-2 border border-gray-400 rounded-full flex items-center justify-around gap-3">
				{/* navigation links */}
				<div className="flex items-center justify-center gap-1">
					<div>
						<a
							href="#projects"
							className="btn border-none shadow-none font-normal btn-ghost rounded-full text-zinc-400 hover:text-white"
						>
							Projects
						</a>
					</div>
					<div>
						<a
							href="#skills"
							className="btn border-none shadow-none font-normal btn-ghost rounded-full text-zinc-400 hover:text-white"
						>
							Skills
						</a>
					</div>
					<div>
						<a
							href="#about"
							className="btn border-none shadow-none font-normal btn-ghost rounded-full text-zinc-400 hover:text-white"
						>
							About
						</a>
					</div>
				</div>

				{/* Divider */}
				<div className="border-r border-zinc-400 h-5"></div>

				{/* Learge Screen Button */}
				<div className="hidden lg:flex gap-2 items-center">
					<a href={"#contact-me"}>
						<button
							className={
								"btn border-none shadow-none font-normal rounded-full text-white bg-blue-500 hover:scale-103 transition-all hover:bg-zinc-500"
							}
						>
							Contact
						</button>
					</a>

					<button
						className={
							"btn border-none shadow-none font-normal rounded-full text-white bg-blue-500 hover:scale-103 hover:bg-zinc-500 transition-all"
						}
					>
						Download CV
					</button>

					<span className="p-1 rounded-full border border-zinc-500 text-zinc-300 flex items-center">
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
				className={`lg:hidden absolute right-6 mt-1 z-50 ${
					isOpen
						? "opacity-100 transition-all duration-300 translate-y-0 scale-100"
						: "opacity-0 transition-all duration-300 -translate-y-3 scale-95 pointer-events-none"
				}`}
			>
				<div className="flex p-2 gap-2 backdrop-blur-xl bg-black/5 border border-gray-400 rounded-full">
					<div className="flex justify-center">
						<a href={"#contact-me"}>
							<button
								className={
									"btn border-none shadow-none font-normal rounded-full text-white bg-blue-500 hover:scale-103 transition-all hover:bg-zinc-500"
								}
							>
								Contact
							</button>
						</a>
					</div>

					<div className="flex justify-center">
						<button
							className={
								"btn border-none shadow-none font-normal rounded-full text-white bg-blue-500 hover:scale-103 hover:bg-zinc-500 transition-all"
							}
						>
							Download CV
						</button>
					</div>

					<div className="flex justify-center">
						<span className="flex items-center border p-2 rounded-full border-zinc-500 text-zinc-300">
							<BiMoon className="w-6 h-6" />
						</span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
