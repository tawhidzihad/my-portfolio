"use client";

import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

export default function BannerRightSideCard() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const rotateX = useSpring(0, {
		stiffness: 180,
		damping: 22,
	});

	const rotateY = useSpring(0, {
		stiffness: 180,
		damping: 22,
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

		rotateX.set(-(centerY / height) * 8);
		rotateY.set((centerX / width) * 8);
	};

	const handleMouseLeave = () => {
		rotateX.set(0);
		rotateY.set(0);
	};

	const glowBackground = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(43, 127, 255,0.18),
      transparent 70%
    )
  `;

	return (
		<div className="flex items-center justify-center overflow-visible">
			{/* Perspective Wrapper */}
			<div
				className="overflow-visible"
				style={{
					perspective: "1400px",
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
					{/* Outer Glow */}
					<div className="absolute -inset-0.5 rounded-4xl bg-linear-to-br from-blue-500/40 via-transparent to-blue-900/30 blur-2xl" />

					{/* Card */}
					<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050505]/95 shadow-2xl backdrop-blur-xl">
						{/* Mouse Glow */}
						<motion.div
							style={{
								background: glowBackground,
							}}
							className="pointer-events-none absolute inset-0 z-0"
						/>

						<div className="flex flex-col h-full z-10">
							{/* Top Bar */}
							<div
								style={{
									transform: "translateZ(50px)",
								}}
								className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-4"
							>
								<div className="flex items-center gap-2">
									<div className="h-3 w-3 rounded-full bg-blue-600" />
									<div className="h-3 w-3 rounded-full bg-blue-500/70" />
									<div className="h-3 w-3 rounded-full bg-blue-500/50" />
								</div>

								<p className="text-sm tracking-wide text-zinc-500">
									Portfolio.tsx
								</p>
							</div>

							{/* Main Content */}
							<div className="px-5 md:px-10 py-10 h-full flex justify-center items-center">
								<code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
									<div className="flex gap-4">
										<span className="text-slate-600 italic">01</span>
										<p className="flex gap-3">
											<span className="text-blue-500">const</span>
											<span className="text-white">
												developer = {"{"}
											</span>
										</p>
									</div>

									<div className="flex gap-4">
										<span className="text-slate-600 italic">02</span>
										<p className="flex gap-3 ml-3">
											<span className="text-white">name:</span>
											<span className="text-blue-500">
												&quot;Tawhidul Islam&quot;
											</span>
											<span className="text-white">,</span>
										</p>
									</div>

									<div className="flex gap-4">
										<span className="text-slate-600 italic">03</span>
										<p className="flex gap-2 ml-3">
											<span className="text-white">focus:</span>
											<span className="text-blue-500">
												&quot;Fullstack Mastery&quot;
											</span>
											<span className="text-white">,</span>
										</p>
									</div>

									<div className="flex gap-4">
										<span className="text-slate-600 italic">04</span>
										<p className="flex gap-1 ml-3">
											<span className="text-white">skills:</span>
											<span className="text-blue-500">
												[&quot;NextJS&quot;, &quot;NodeJS&quot;,
												&quot;AI&quot;]{" "}
											</span>
											<span className="text-white">,</span>
										</p>
									</div>

									<div className="flex gap-4">
										<span className="text-slate-600 italic">05</span>
										<p className="flex gap-1 ml-3">
											<span className="text-white">passionate:</span>
											<span className="text-blue-500">true</span>
											<span className="text-white">,</span>
										</p>
									</div>

									<div className="flex gap-4">
										<span className="text-slate-600 italic">06</span>
										<p className="flex gap-1 ml-3">
											<span className="text-white">motto:</span>
											<span className="text-blue-500">
												&quot;Build with Purpose&quot;
											</span>
											<span className="text-white">,</span>
										</p>
									</div>

									<div className="flex gap-4">
										<span className="text-slate-600 italic">07</span>
										<p className="flex gap-3">
											<span className="text-white">{"}"};</span>
										</p>
									</div>

									<div className="flex gap-4 mt-4">
										<span className="text-slate-600 italic">08</span>
										<p className="flex">
											<span className="text-blue-500">
												depeloper
											</span>
											<span className="text-white">
												.showcase();
											</span>
										</p>
									</div>
								</code>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
