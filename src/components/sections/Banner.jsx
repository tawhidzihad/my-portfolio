import Image from "next/image";
import Link from "next/link";
import { BsPhoneVibrate } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
	return (
		<div className="bg-gray-800 pt-30 md:pt-60 pb-20">
			<div className="max-w-7xl mx-auto flex gap-2 flex-col-reverse lg:flex-row items-center justify-between">
				{/* Left side */}
				<div className="px-3 md:px-0 text-center lg:text-left">
					<h1 className="max-w-xl text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-slate-300 via-indigo-300 to-indigo-400 mb-6 leading-tight">
						Crafting Exceptional Web Experiences
					</h1>

					<p className="text-xl text-zinc-400 leading-relaxed mb-5 max-w-lg sm:mx-auto lg:mx-0">
						A Full Stack Developer passionate about turning ideas into
						realistic and practical applications.
					</p>

					<div className="flex gap-3 items-center justify-center lg:justify-start">
						<Link
							href={"#projects"}
							className="flex items-center gap-1 text-white bg-blue-500 px-4 py-2 rounded-full transition-all duration-100 hover:bg-zinc-500 hover:scale-102"
						>
							View Projects <IoIosArrowForward />
						</Link>
						<Link
							href={"#contact-me"}
							className="flex items-center gap-1 text-white bg-blue-500 px-4 py-2 rounded-full transition-all duration-100 hover:bg-zinc-500 hover:scale-103"
						>
							Contact <BsPhoneVibrate />
						</Link>
					</div>
				</div>

				{/* Right Side */}
				<div className="image-card">
					<div className="image-wrapper">
						<Image
							src="/images/banner-image.png"
							width={500}
							height={500}
							alt="Tawhid Zihad"
							priority
							className="h-100 md:h-130 w-auto hover:scale-105 transition-all duration-300 ease-in-out"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
