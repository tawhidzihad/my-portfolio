"use client";

import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

const codeContent = `const developer = {
  name: "Tawhidul Islam",
  role: "Full Stack Engineer",
  stack: ["Next.js", "React", "Node.js", "MongoDB"],
  openForWork: true,
  build: () => "High Performance & Clean Architecture"
};

developer.showcase();`;

export default function BannerRightSideCard() {
	const [copied, setCopied] = useState(false);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const rotateX = useSpring(0, {
		stiffness: 160,
		damping: 24,
	});

	const rotateY = useSpring(0, {
		stiffness: 160,
		damping: 24,
	});

	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;

		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = x - width / 2;
		const centerY = y - height / 2;

		mouseX.set(x);
		mouseY.set(y);

		rotateX.set(-(centerY / height) * 7);
		rotateY.set((centerX / width) * 7);
	};

	const handleMouseLeave = () => {
		rotateX.set(0);
		rotateY.set(0);
	};

	const glowBackground = useMotionTemplate`
    radial-gradient(
      280px circle at ${mouseX}px ${mouseY}px,
      rgba(59, 130, 246, 0.12),
      transparent 75%
    )
  `;

	const handleCopy = () => {
		navigator.clipboard.writeText(codeContent);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="w-full max-w-lg flex items-center justify-center">
			<div
				className="w-full"
				style={{
					perspective: "1200px",
				}}
			>
				<motion.div
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					style={{
						rotateX,
						rotateY,
						transformStyle: "preserve-3d",
					}}
					className="relative will-change-transform"
				>
					{/* Ambient Glow */}
					<div className="absolute -inset-1 rounded-3xl bg-linear-to-tr from-blue-500/20 via-indigo-500/10 to-transparent blur-xl pointer-events-none" />

					{/* Terminal Card Container */}
					<div className="relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/90 shadow-2xl shadow-blue-500/5 dark:shadow-black/50 backdrop-blur-xl transition-colors duration-300">
						{/* Interactive Mouse Glow */}
						<motion.div
							style={{
								background: glowBackground,
							}}
							className="pointer-events-none absolute inset-0 z-0"
						/>

						{/* Terminal Window Header */}
						<div className="relative z-10 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-5 py-3.5 bg-slate-50/80 dark:bg-slate-950/40">
							<div className="flex items-center gap-2">
								<span className="h-3 w-3 rounded-full bg-red-400 dark:bg-red-500/80" />
								<span className="h-3 w-3 rounded-full bg-amber-400 dark:bg-amber-500/80" />
								<span className="h-3 w-3 rounded-full bg-emerald-400 dark:bg-emerald-500/80" />
								<span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400 font-medium">
									DeveloperProfile.ts
								</span>
							</div>

							<button
								type="button"
								onClick={handleCopy}
								className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded-md hover:bg-slate-200/60 dark:hover:bg-slate-800/60 cursor-pointer"
								aria-label="Copy snippet"
							>
								{copied ? (
									<>
										<FiCheck className="w-3.5 h-3.5 text-emerald-500" />
										<span className="text-emerald-500 font-medium">Copied!</span>
									</>
								) : (
									<>
										<FiCopy className="w-3.5 h-3.5" />
										<span>Copy</span>
									</>
								)}
							</button>
						</div>

						{/* Code Body */}
						<div className="relative z-10 p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto select-none">
							<div className="flex gap-4">
								<span className="text-slate-400 dark:text-slate-600 select-none">01</span>
								<p>
									<span className="text-purple-600 dark:text-purple-400 font-semibold">const </span>
									<span className="text-blue-600 dark:text-blue-300">developer </span>
									<span className="text-slate-800 dark:text-slate-200">= &#123;</span>
								</p>
							</div>

							<div className="flex gap-4">
								<span className="text-slate-400 dark:text-slate-600 select-none">02</span>
								<p className="pl-4">
									<span className="text-slate-700 dark:text-slate-300">name: </span>
									<span className="text-emerald-600 dark:text-emerald-400">&quot;Tawhidul Islam&quot;</span>
									<span className="text-slate-800 dark:text-slate-200">,</span>
								</p>
							</div>

							<div className="flex gap-4">
								<span className="text-slate-400 dark:text-slate-600 select-none">03</span>
								<p className="pl-4">
									<span className="text-slate-700 dark:text-slate-300">role: </span>
									<span className="text-emerald-600 dark:text-emerald-400">&quot;Full Stack Engineer&quot;</span>
									<span className="text-slate-800 dark:text-slate-200">,</span>
								</p>
							</div>

							<div className="flex gap-4">
								<span className="text-slate-400 dark:text-slate-600 select-none">04</span>
								<p className="pl-4">
									<span className="text-slate-700 dark:text-slate-300">stack: </span>
									<span className="text-slate-800 dark:text-slate-200">[</span>
									<span className="text-emerald-600 dark:text-emerald-400">&quot;Next.js&quot;</span>
									<span className="text-slate-800 dark:text-slate-200">, </span>
									<span className="text-emerald-600 dark:text-emerald-400">&quot;React&quot;</span>
									<span className="text-slate-800 dark:text-slate-200">, </span>
									<span className="text-emerald-600 dark:text-emerald-400">&quot;Node.js&quot;</span>
									<span className="text-slate-800 dark:text-slate-200">, </span>
									<span className="text-emerald-600 dark:text-emerald-400">&quot;MongoDB&quot;</span>
									<span className="text-slate-800 dark:text-slate-200">],</span>
								</p>
							</div>

							<div className="flex gap-4">
								<span className="text-slate-400 dark:text-slate-600 select-none">05</span>
								<p className="pl-4">
									<span className="text-slate-700 dark:text-slate-300">openForWork: </span>
									<span className="text-amber-600 dark:text-amber-400 font-semibold">true</span>
									<span className="text-slate-800 dark:text-slate-200">,</span>
								</p>
							</div>

							<div className="flex gap-4">
								<span className="text-slate-400 dark:text-slate-600 select-none">06</span>
								<p className="pl-4">
									<span className="text-slate-700 dark:text-slate-300">passion: </span>
									<span className="text-emerald-600 dark:text-emerald-400">&quot;Build Scalable &amp; Clean UI&quot;</span>
								</p>
							</div>

							<div className="flex gap-4">
								<span className="text-slate-400 dark:text-slate-600 select-none">07</span>
								<p>
									<span className="text-slate-800 dark:text-slate-200">&#125;;</span>
								</p>
							</div>

							<div className="flex gap-4 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
								<span className="text-slate-400 dark:text-slate-600 select-none">08</span>
								<p>
									<span className="text-blue-600 dark:text-blue-400 font-medium">developer</span>
									<span className="text-slate-800 dark:text-slate-200">.</span>
									<span className="text-indigo-600 dark:text-indigo-400 font-medium">showcase</span>
									<span className="text-slate-800 dark:text-slate-200">();</span>
								</p>
							</div>
						</div>

						{/* Status Bar */}
						<div className="relative z-10 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 px-5 py-2.5 bg-slate-50/50 dark:bg-slate-950/20 text-[11px] text-slate-500 dark:text-slate-400">
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
								<span>Available for Full-time &amp; Projects</span>
							</div>
							<span className="font-mono">UTF-8</span>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
