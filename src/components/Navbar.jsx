"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { BiMoon } from "react-icons/bi";
import { RiMenuFill, RiMenuFold2Fill } from "react-icons/ri";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="max-w-2xl fixed left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 z-50">
			<header className="backdrop-blur-xl bg-black/5 p-1 md:p-2 border border-gray-400 rounded-full flex gap-3 items-center justify-around">
				{/* navigation links */}
				<div>
					<ul className="flex gap-1">
						<li>
							<Link href={"#projects"}>
								<Button
									variant="ghost"
									className={"text-zinc-500 hover:text-black"}
								>
									Projects
								</Button>
							</Link>
						</li>

						<li>
							<Link href={"#skills"}>
								<Button
									variant="ghost"
									className={"text-zinc-500 hover:text-black"}
								>
									Skills
								</Button>
							</Link>
						</li>

						<li>
							<Link href={"#about"}>
								<Button
									variant="ghost"
									className={"text-zinc-500 hover:text-black"}
								>
									About Me
								</Button>
							</Link>
						</li>
					</ul>
				</div>

				{/* Divider */}
				<div className="border-r border-zinc-400 h-5"></div>

				{/* MD & LG icon */}
				<div className="hidden md:flex gap-2 items-center">
					<a href={"#contact-me"}>
						<Button
							className={
								"bg-zinc-400 text-white hover:scale-103 transition-all hover:bg-zinc-500"
							}
						>
							Contact
						</Button>
					</a>

					<Button
						className={"hover:scale-103 hover:bg-zinc-500 transition-all"}
					>
						Download CV
					</Button>

					<span className="p-1 rounded-full border border-zinc-400 text-zinc-600">
						<BiMoon className="w-6 h-6" />
					</span>
				</div>

				{/* Conditional render - menu icon */}
				<div
					className={`md:hidden p-3 relative`}
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
				className={`block md:hidden absolute right-6 mt-1 z-50 ${
					isOpen
						? "opacity-100 transition-all duration-300 translate-y-0 scale-100"
						: "opacity-0 transition-all duration-300 -translate-y-3 scale-95 pointer-events-none"
				}`}
			>
				<div className="flex p-2 gap-2 backdrop-blur-xl bg-black/5 border border-gray-400 rounded-full">
					<div className="flex justify-center">
						<Button
							className={
								"bg-zinc-400 text-white hover:scale-103 transition-all hover:bg-zinc-500"
							}
						>
							Contact
						</Button>
					</div>

					<div className="flex justify-center">
						<Button
							className={
								"hover:scale-103 hover:bg-zinc-500 transition-all"
							}
						>
							Download CV
						</Button>
					</div>

					<div className="flex justify-center">
						<span className="flex items-center border p-2 rounded-full border-zinc-400 text-zinc-600">
							<BiMoon className="w-6 h-6" />
						</span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
