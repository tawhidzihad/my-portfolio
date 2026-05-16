import { Button } from "@heroui/react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import BannerRightSideCard from "../BannerRightSideCard";
import TypeWriting from "../TypeWriting";

const Banner = () => {
	return (
		<div className="bg-[#011026] pt-30 md:pt-40 lg:pt-60 pb-20">
			<div className="max-w-7xl mx-auto flex gap-10 flex-col-reverse lg:flex-row items-center justify-between">
				{/* Left side */}
				<div className="lg:w-2/4 space-y-6">
					<div className="px-5 md:px-0 space-y-5">
						{/* <span className="text-blue-500 shadow-2xl shadow-blue-300 font-medium bg-blue-500/10 py-2 px-3 border border-blue-500/10 rounded-full">
							Built with passion & precision
						</span> */}

						<span className="text-blue-500 font-normal bg-blue-500/10 py-2 px-3 border border-blue-500/10 rounded-full [text-shadow:0_0_15px_rgba(59,130,246,0.8)] tracking-widest">
							WELCOME TO MY PORTFOLIO
						</span>
						<h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-none mt-5">
							<span className="lg:mr-5">Crafting</span>
							<br className="lg:hidden" />
							<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-800">
								Digital
							</span>
							<br />
							<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-900">
								Masterpieces
							</span>
						</h1>

						<p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
							I&apos;m{" "}
							<span className="text-white font-bold"> Tawhid</span>, a
							professional <TypeWriting /> <br />
							dedicated to building high-performance, user-centric web
							applications.
						</p>
					</div>

					<div className="flex gap-3 items-center justify-start px-5 md:px-0">
						<div>
							<Link href={"#projects"}>
								<Button
									className={
										"flex text-white bg-blue-500 hover:scale-103 transition-all hover:bg-zinc-500"
									}
								>
									View Projects
									<IoIosArrowForward className="hover:scale-103 transition-all" />
								</Button>
							</Link>
						</div>
						<div>
							<Link href={"#contact-me"}>
								<Button
									className={
										"flex text-white bg-blue-500 hover:scale-103 transition-all hover:bg-zinc-500"
									}
								>
									View Projects
									<IoIosArrowForward className="hover:scale-103 transition-all" />
								</Button>
							</Link>
						</div>
					</div>
				</div>

				{/* Right Side */}
				<div className="md:w-2/4 flex justify-center md:justify-end">
					<BannerRightSideCard></BannerRightSideCard>
				</div>
			</div>
		</div>
	);
};

export default Banner;
