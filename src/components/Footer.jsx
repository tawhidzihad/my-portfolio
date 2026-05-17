import Image from "next/image";
import Link from "next/link";
import { FaSquarePhone } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { SiGmail } from "react-icons/si";

const Footer = () => {
	return (
		<footer className="bg-black text-white">
			<div className="max-w-7xl mx-auto pt-20 pb-10">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 lg:px-0">
					{/* Logo */}
					<div>
						<Link href={"/"}>
							<Image
								src={"/images/td-logo.png"}
								alt="Tawhid Dev Logo"
								width={100}
								height={100}
							/>
						</Link>
						<p className="text-gray-400 text-sm leading-relaxed max-w-xs">
							Professional Full Stack Developer dedicated to crafting
							immersive, high-performance digital experiences with
							cutting-edge technology.
						</p>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">
							Navigation
						</h3>

						<ul className="space-y-3">
							<li>
								<Link
									href={"#projects"}
									className="text-gray-400 hover:text-blue-500 hover:border-b hover:border-blue-500 transition-all ease-in-out duration-300 font-medium"
								>
									Projects
								</Link>
							</li>

							<li>
								<Link
									href={"#skills"}
									className="text-gray-400 hover:text-blue-500 hover:border-b hover:border-blue-500 transition-all ease-in-out duration-300 font-medium"
								>
									Skills
								</Link>
							</li>

							<li>
								<Link
									href={"#about"}
									className="text-gray-400 hover:text-blue-500 hover:border-b hover:border-blue-500 transition-all ease-in-out duration-300 font-medium"
								>
									About
								</Link>
							</li>

							<li>
								<a
									href={
										"https://www.linkedin.com/in/tawhidulislamzihad"
									}
									target="_blank"
									className="text-gray-400 hover:text-blue-500 hover:border-b hover:border-blue-500 transition-all ease-in-out duration-300 font-medium"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Connect */}
					<div className="">
						<div>
							<h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">
								Connect
							</h3>

							<div className="space-y-2">
								<Link
									href={"mailto:tawhidgift@gmail.com"}
									className="flex items-center gap-3"
								>
									<SiGmail />
									tawhidgift@gmail.com
								</Link>

								<Link
									href={"tel:+8801704725639"}
									className="flex items-center gap-3"
								>
									<FaSquarePhone />
									+8801704725639
								</Link>

								<a
									href={"https://maps.app.goo.gl/GR3erfcVvD6Pt84Y7"}
									target="_blank"
									className="flex items-center gap-3"
								>
									<HiLocationMarker />
									Dhaka, Bangladesh
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Copyrights */}
				<div className="mt-16 pt-8 border-t border-zinc-700 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm px-0 md:px-4 lg:px-0">
					<p>
						© {new Date().getFullYear()} Tawhidul Islam. All rights
						reserved.
					</p>

					<p>Made with Next.js & Tailwind CSS</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
