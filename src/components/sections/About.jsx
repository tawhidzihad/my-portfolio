import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const About = () => {
	return (
		<div id="about" className="bg-[#011026] px-5 lg:px-0 md:pt-10 pb-20">
			<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-15 items-center">
				<div>
					<h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
						Hello, I&apos;m
						<span className="text-blue-500 relative inline-block border-b-3 border-blue-500">
							Tawhidul Islam
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-muted max-w-xl leading-relaxed">
						Crafting beautiful, functional digital experiences that users
						love and businesses rely on.
					</p>

               {/* Social Links */}
					<div className="flex items-center gap-4 mt-6">
						<a
							href="https://github.com/tawhidzihad"
							target="_blank"
							className="p-2 rounded-xl bg-blue-500/5 block text-white hover:text-blue-500 transition-all ease-in-out duration-700"
						>
							<FaGithub className="h-7 w-auto" />
						</a>

						<a
							href="https://www.linkedin.com/in/tawhidulislamzihad"
							target="_blank"
							className="p-2 rounded-xl bg-blue-500/5 block text-white hover:text-blue-500 transition-all ease-in-out duration-700"
						>
							<FaLinkedin className="h-7 w-auto" />
						</a>

						<a
							href="https://x.com/tawhidzihad_dev"
							target="_blank"
							className="p-2 rounded-xl bg-blue-500/5 block text-white hover:text-blue-500 transition-all ease-in-out duration-700"
						>
							<FaXTwitter className="h-7 w-auto" />
						</a>

						<a
							href="https://leetcode.com/u/tawhiddev/"
							target="_blank"
							className="p-2 rounded-xl bg-blue-500/5 block text-white hover:text-blue-500 transition-all ease-in-out duration-700"
						>
							<SiLeetcode className="h-7 w-auto" />
						</a>
					</div>
				</div>

				{/* My Image */}
				<div className="flex justify-center items-center relative">
					<div className="bg-white shadow-blue-400 shadow-lg px-4 rounded-4xl group overflow-hidden lg:z-20">
						<Image
							src={"/images/tawhid.png"}
							alt="Tawhidul Islam"
							width={350}
							height={350}
							className="w-auto h-full object-cover transition-transform duration-700 group-hover:scale-105"
							loading="eager"
						/>
					</div>

					<div className="absolute left-8 -bottom-5 w-24 h-24 rounded-2xl bg-blue-500/10"></div>
					<div className="absolute right-11 -top-6 w-24 rounded-full h-24 bg-blue-500/30 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

export default About;
