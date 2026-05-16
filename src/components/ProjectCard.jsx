import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";

const ProjectCard = ({ project }) => {
	const { title, image, description, technologies, repoLink, liveLink } =
		project;

	return (
		<div className="group hover:border-blue-500 transition-colors duration-500 ease-in-out overflow-hidden rounded-xl border border-white/10 bg-blue-900/10 flex flex-col">
			{/* Image Wrapper */}
			<div className="overflow-hidden">
				<Image
					src={image}
					alt="project"
					width={200}
					height={200}
					className="h-70 w-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
				/>
			</div>

			{/* Content */}
			<div className="space-y-5 p-4 flex-1">
				<div className="space-y-2">
					<h2 className="text-xl md:text-2xl font-bold text-white/80 hover:text-blue-500 transition-all duration-300 ease-in-out">
						{title}
					</h2>

					<p className="text-slate-400 line-clamp-3 italic text-xs md:text-lg leading-4 md:leading-5">
						{description}
					</p>
				</div>

				{/* Tags */}
				<div className="flex flex-wrap gap-3">
					{technologies.map((tecnology, ind) => (
						<Chip
							key={ind}
							className="bg-transparent text-white/80 border border-white/10 flex items-center"
						>
							{tecnology}
						</Chip>
					))}
				</div>

				{/* Buttons */}
				<div className="flex items-center gap-2">
					<a href={repoLink} target="_blank">
						<Button
							variant="ghost"
							className="flex items-center gap-2 rounded-full border border-blue-500/20 text-white/80 hover:bg-blue-500 transition-all duration-300 ease-in-out"
						>
							Source Code <FaCode />
						</Button>
					</a>

					<a href={liveLink} target="_blank">
						<Button
							variant="ghost"
							className="flex items-center gap-2 rounded-full border border-blue-500/20 text-white/80 hover:bg-blue-500 transition-all duration-300 ease-in-out"
						>
							Live Demo <GoBrowser />
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
