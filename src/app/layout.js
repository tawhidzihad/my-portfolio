import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// const tajawal = Tajawal({
// 	variable: "--font-tajawal",
// 	subsets: ["latin"],
// 	weight: ["200", "300", "400", "500", "700", "800", "900"],
// });

// const outfit = Outfit({
// 	variableL: "--outfit-font",
// 	subsets: ["latin"],
// 	weight: ["200", "300", "400", "500", "700", "800", "900"],
// });

const plusJakarta = Plus_Jakarta_Sans({
	variableL: "--plus-jakarta-font",
	subsets: ["latin"],
});

export const metadata = {
	title: "Tawhid Dev - Full Stack Web Developer",
	description:
		"MERN Stack Developer passionate about building beautiful, high-performance web applications with Next.js and MongoDB.",
	keywords: [
		"Tawhid Dev",
		"MERN Stack Developer",
		"Next.js Developer",
		"React Developer",
		"MongoDB",
		"Web Developer",
	],
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${plusJakarta.className} h-full antialiased scroll-smooth`}
		>
			<body className="min-h-full flex flex-col">
				<header>
					<Navbar></Navbar>
				</header>
				<main>{children}</main>
				<Footer></Footer>
			</body>
		</html>
	);
}
