"use client";

import { TypeAnimation } from "react-type-animation";

const TypeWriting = () => {
	return (
		<TypeAnimation
			sequence={[
				"Full Stack Developer",
				1500,
				"Next.js Specialist",
				1500,
				"React & Node.js Engineer",
				1500,
				"Problem Solver & Innovator",
				1500,
			]}
			wrapper="span"
			speed={45}
			cursor={true}
			style={{ display: "inline-block" }}
			repeat={Infinity}
			className="text-blue-600 dark:text-blue-400 font-bold"
		/>
	);
};

export default TypeWriting;
