import { Chip } from "@heroui/react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";

const ProjectCard = () => {
	return (
		<div className="group hover:border-blue-400 transition-colors duration-500 ease-in-out overflow-hidden rounded-xl border border-white/10 bg-gray-900/50">
			{/* Image Wrapper */}
			<div className="overflow-hidden">
				<Image
					src="https://i.ibb.co.com/9k1Pcc5x/Screenshot-1.png"
					alt="project"
					width={400}
					height={400}
					className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
				/>
			</div>

			{/* Content */}
			<div className="space-y-6 p-6 text-white">
				<div>
					<h2 className="text-2xl font-bold text-white hover:text-blue-500 transition-colors">
						BookLend
					</h2>

					<p className="text-slate-400 line-clamp-2 text-lg leading-relaxed font-medium italic">
						Booklend is a digital book borrowing platform where users can
						browse, borrow, and manage books online. It features
						authentication, pricing plans, and activity tracking for a
						seamless user experience with responsive design.
					</p>
				</div>

				{/* Tags */}
				<div className="flex flex-wrap gap-3">
					<Chip className="bg-transparent text-white border border-white/10">
						JavaScript
					</Chip>
					<Chip className="bg-transparent text-white border border-white/10">
						NextJS
					</Chip>
					<Chip className="bg-transparent text-white border border-white/10">
						TailwindCSS
					</Chip>
					<Chip className="bg-transparent text-white border border-white/10">
						HeroUI
					</Chip>
					<Chip className="bg-transparent text-white border border-white/10">
						MongoDB
					</Chip>
					<Chip className="bg-transparent text-white border border-white/10">
						BetterAuth
					</Chip>
				</div>

				{/* Buttons */}
				<div className="flex gap-2">
					<a href="">
						<button className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 md:px-6 md:py-2 hover:text-blue-500 hover:border-blue-500 transition-all duration-300 ease-in-out">
							Source Code <FaCode />
						</button>
					</a>
					<a href="">
						<button className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 md:px-6 md:py-2 hover:text-blue-500 hover:border-blue-500 transition-all duration-300 ease-in-out">
							Live Demo <GoBrowser />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
