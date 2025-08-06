"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button, SidebarMenuButton } from "@/components/ui";

interface ThemeToggleProps {
	sidebar?: boolean;
	size?: "sm" | "icon" | "default" | "lg";
}

const ThemeToggle = (props: ThemeToggleProps) => {
	const { sidebar, size = "sm" } = props;
	const { theme, setTheme } = useTheme();
	const t = useTranslations("Components.ThemeToggle");

	function toggleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}

	if (!sidebar)
		return (
			<Button
				size={size}
				variant="outline"
				id="theme-toggle"
				name="theme-toggle"
				onClick={toggleTheme}
				className="rounded-full cursor-pointer aspect-square min-w-4">
				{theme === "dark" ? (
					<SunIcon className="w-full" />
				) : (
					<MoonIcon className="w-full" />
				)}
			</Button>
		);

	return (
		<SidebarMenuButton onClick={toggleTheme}>
			{theme === "dark" ? (
				<SunIcon className="w-full" />
			) : (
				<MoonIcon className="w-full" />
			)}
			<label htmlFor="theme-toggle" className="cursor-pointer truncate">
				{theme === "dark" ? t("LightMode") : t("DarkMode")}
			</label>
		</SidebarMenuButton>
	);
};

export default ThemeToggle;
