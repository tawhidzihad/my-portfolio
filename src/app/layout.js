import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
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
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<header>
					<Navbar></Navbar>
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
