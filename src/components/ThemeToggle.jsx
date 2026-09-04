"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const emptySubscribe = () => () => {};

export default function ThemeToggle({ className = "" }) {
	const mounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false
	);
	const { resolvedTheme, setTheme } = useTheme();

	if (!mounted) {
		return (
			<div
				className={`w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-800/50 animate-pulse ${className}`}
				aria-hidden="true"
			/>
		);
	}

	const isDark = resolvedTheme === "dark";

	return (
		<button
			type="button"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${className}`}
			aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
			title={`Switch to ${isDark ? "light" : "dark"} mode`}
		>
			{isDark ? (
				<FiSun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400" />
			) : (
				<FiMoon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-12 text-slate-700" />
			)}
		</button>
	);
}
