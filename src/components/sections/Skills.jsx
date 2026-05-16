import { Icon } from "@iconify/react";
import { Monitor, Server, Wrench } from "lucide-react";

const Skills = () => {
	return (
		<div id="skills" className="bg-[#011026] pt-5 pb-20">
			<div className="max-w-7xl mx-auto space-y-10 px-5 lg:px-0 overflow-hidden">
				{/* Heading text */}
				<div>
					<p className="text-blue-500 font-mono text-sm uppercase mb-1">
						Tech Arsenal
					</p>
					<h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
						Skills
					</h2>
				</div>

				{/* Skill Collections */}
				<div className="grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 md:gap-9 ">
					{/* Frontend */}
					<div className="px-5 py-8 border border-blue-500/20 rounded-2xl">
						<h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
							<div className="text-blue-500 bg-blue-500/10 rounded-xl border border-zinc-800 p-2">
								<Monitor />
							</div>
							Frontend
						</h3>

						<div className="grid grid-cols-3 gap-3">
							{/* Skill 1 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"skill-icons:html"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									HTML
								</span>
							</div>

							{/* Skill 2 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"skill-icons:css"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									CSS
								</span>
							</div>

							{/* Skill 3 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"skill-icons:javascript"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									JavaScript
								</span>
							</div>

							{/* Skill 4 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"logos:react"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									React
								</span>
							</div>

							{/* Skill 5 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"devicon:nextjs"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									NextJS
								</span>
							</div>

							{/* Skill 6 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"skill-icons:typescript"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									TypeScript
								</span>
							</div>
						</div>
					</div>

					{/* Backend */}
					<div className="px-5 py-8 border border-blue-500/20 rounded-2xl">
						<h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
							<div className="text-green-500 bg-blue-500/10 rounded-xl border border-zinc-800 p-2">
								<Server />
							</div>
							Backend
						</h3>

						<div className="grid grid-cols-3 gap-3">
							{/* Skill 1 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"devicon:nodejs"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									NodeJS
								</span>
							</div>

							{/* Skill 2 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"skill-icons:expressjs-light"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									ExpressJS
								</span>
							</div>

							{/* Skill 3 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"skill-icons:javascript"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									JavaScript
								</span>
							</div>

							{/* Skill 4 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"skill-icons:mongodb"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									MongoDB
								</span>
							</div>

							{/* Skill 5 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"skill-icons:typescript"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									TypeScript
								</span>
							</div>
						</div>
					</div>

					{/* Tools & DevOps */}
					<div className="px-5 py-8 border border-blue-500/20 rounded-2xl">
						<h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
							<div className="text-purple-500 bg-blue-500/10 rounded-xl border border-zinc-800 p-2">
								<Wrench />
							</div>
							Tools & DevOps
						</h3>

						<div className="grid grid-cols-3 gap-3">
							{/* Skill 1 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"material-icon-theme:git"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									GIT
								</span>
							</div>

							{/* Skill 2 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"devicon:vscode"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									VS Code
								</span>
							</div>

							{/* Skill 3 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"devicon:vercel"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									Vercel
								</span>
							</div>

							{/* Skill 4 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"devicon:postman"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									Postman
								</span>
							</div>

							{/* Skill 5 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"skill-icons:windows-dark"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									Windows
								</span>
							</div>

							{/* Skill 6 */}
							<div className="flex justify-center items-center flex-col gap-1">
								<div className="border rounded-2xl p-2 border-blue-800/10 bg-blue-500/10">
									<Icon
										icon={"devicon:figma"}
										width={50}
										height={50}
										className="h-9 w-auto shrink-0"
									/>
								</div>

								<span className="text-[10px] text-zinc-500 font-medium">
									Figma
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
