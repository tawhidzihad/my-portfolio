import AOSInit from "@/components/AOSInit";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta",
	display: "swap",
});

export const metadata = {
	title: "Tawhidul Islam - Full Stack Web Developer",
	description:
		"Full Stack Web Developer crafting high-performance, accessible, and user-centric web applications with Next.js, React, Node.js, and MongoDB.",
	keywords: [
		"Tawhidul Islam",
		"Tawhid Dev",
		"Full Stack Web Developer",
		"Next.js Developer",
		"React Developer",
		"JavaScript",
		"TypeScript",
		"Node.js",
		"MongoDB",
		"Frontend Engineer",
		"Web Applications",
	],
	authors: [{ name: "Tawhidul Islam", url: "https://tawhid-dev-portfolio.vercel.app" }],
	creator: "Tawhidul Islam",
	metadataBase: new URL("https://tawhid-dev-portfolio.vercel.app"),
	openGraph: {
		title: "Tawhidul Islam - Full Stack Web Developer",
		description:
			"Full Stack Web Developer crafting high-performance, accessible, and user-centric web applications with Next.js, React, Node.js, and MongoDB.",
		url: "https://tawhid-dev-portfolio.vercel.app",
		siteName: "Tawhidul Islam Portfolio",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tawhidul Islam - Full Stack Web Developer",
		description:
			"Full Stack Web Developer crafting high-performance, accessible, and user-centric web applications with Next.js, React, Node.js, and MongoDB.",
		creator: "@tawhidzihad_dev",
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${plusJakarta.variable} ${plusJakarta.className} h-full antialiased scroll-smooth`}
		>
			<body className="min-h-full flex flex-col transition-colors duration-300">
				<ThemeProvider>
					<AOSInit />
					<header>
						<Navbar />
					</header>
					<main className="flex-1">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
