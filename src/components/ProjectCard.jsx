"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronUp, FiExternalLink, FiGithub } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project, index = 0 }) => {
	const { title, image, description, technologies = [], repoLink, liveLink } =
		project;

	const [isExpanded, setIsExpanded] = useState(false);
	const defaultVisibleCount = 3;
	const hasMore = technologies.length > defaultVisibleCount;
	const remainingCount = hasMore ? technologies.length - defaultVisibleCount : 0;

	// Technologies to display depending on expanded state
	const displayedTech = isExpanded
		? technologies
		: technologies.slice(0, defaultVisibleCount);

	return (
		<div
			data-aos="fade-up"
			data-aos-delay={index * 100 + 50}
			className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/70 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
		>
			{/* Project Image Container */}
			<div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
				<Image
					src={image}
					alt={`${title} project preview`}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
			</div>

			{/* Project Content */}
			<div className="flex flex-col flex-1 p-6">
				{/* Title & Description */}
				<div className="space-y-2.5 flex-1">
					<h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
						{title}
					</h3>

					<p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
						{description}
					</p>
				</div>

				{/* Tech Stack Chips */}
				<div className="my-5">
					<motion.div
						layout
						transition={{ duration: 0.25, ease: "easeInOut" }}
						className="flex flex-wrap gap-1.5 items-center"
					>
						<AnimatePresence initial={false} mode="sync">
							{displayedTech.map((tech, ind) => (
								<motion.span
									key={tech}
									layout
									initial={ind >= defaultVisibleCount ? { opacity: 0, scale: 0.8, y: 4 } : false}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.8, y: 4 }}
									transition={{
										duration: 0.2,
										delay: ind >= defaultVisibleCount ? (ind - defaultVisibleCount) * 0.04 : 0,
									}}
									className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 transition-colors hover:border-slate-300 dark:hover:border-slate-600"
								>
									{tech}
								</motion.span>
							))}

							{/* Dynamic +N badge button when collapsed */}
							{!isExpanded && hasMore && (
								<motion.button
									key="more-btn"
									layout
									type="button"
									onClick={() => setIsExpanded(true)}
									whileHover={{ scale: 1.08 }}
									whileTap={{ scale: 0.92 }}
									initial={{ opacity: 0, scale: 0.7 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.7 }}
									transition={{ type: "spring", stiffness: 450, damping: 25 }}
									className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/70 hover:bg-blue-100 dark:hover:bg-blue-900/60 hover:border-blue-300 dark:hover:border-blue-600 shadow-xs cursor-pointer transition-colors select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
									aria-label={`Show ${remainingCount} more technologies`}
									title={`Show ${remainingCount} more technologies`}
								>
									+{remainingCount}
								</motion.button>
							)}

							{/* Collapse button when expanded */}
							{isExpanded && hasMore && (
								<motion.button
									key="collapse-btn"
									layout
									type="button"
									onClick={() => setIsExpanded(false)}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.92 }}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{ duration: 0.18 }}
									className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-mono font-medium rounded-md bg-slate-100/90 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-dashed border-slate-300 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-600/60 transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
									aria-label="Show fewer technologies"
									title="Collapse technologies"
								>
									<span>Less</span>
									<FiChevronUp className="w-3 h-3" />
								</motion.button>
							)}
						</AnimatePresence>
					</motion.div>
				</div>

				{/* CTA Buttons */}
				<div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
					<a
						href={repoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
					>
						<FiGithub className="w-3.5 h-3.5" />
						Source
					</a>

					<a
						href={liveLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 transition-all hover:scale-[1.02] cursor-pointer"
					>
						<FiExternalLink className="w-3.5 h-3.5" />
						Live Demo
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
