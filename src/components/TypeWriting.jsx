"use client";

import { TypeAnimation } from "react-type-animation";

const TypeWriting = () => {
	return (
		<>
			<TypeAnimation
				sequence={[
					"Developer.",
					1000,
					"Designer.",
					1000,
					"Innovertor",
					1000,
					"Engineer.",
					1000,
				]}
				wrapper="span"
				speed={40}
				deletionSpeed={30}
				cursor={false}
				style={{ fontSize: "18px", display: "inline-block" }}
				repeat={Infinity}
				className="text-blue-500 leading-relaxed font-bold"
			/>
		</>
	);
};

export default TypeWriting;
