"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LanguagesIcon } from "lucide-react";
import { cn, localeChangeAction } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	SidebarMenuButton,
} from "@/components/ui";

const LANGUAGES = [
	{ code: "fa", label: "فارسی" },
	{ code: "en", label: "English" },
];

interface Props {
	sidebar?: boolean;
	className?: string;
}

const LanguageSwitcher = ({ className, sidebar }: Props) => {
	const router = useRouter();
	const currentLocale = useLocale();
	const t = useTranslations("Components.LanguageSwitcher");
	const [selectedLocale, setSelectedLocale] = useState(currentLocale);

	const handleLocaleChange = async (locale: string) => {
		if (locale === currentLocale) return;

		setSelectedLocale(locale);
		await localeChangeAction(locale); // sets NEXT_LOCALE cookie server-side
		router.refresh(); // reloads page with new locale
	};

	if (!sidebar)
		return (
			<DropdownMenu dir={currentLocale === "fa" ? "rtl" : "ltr"}>
				<DropdownMenuTrigger asChild className={cn("", className)}>
					<Button
						size={"sm"}
						variant="outline"
						className="cursor-pointer">
						<LanguagesIcon />
						{
							LANGUAGES.find((l) => l.code === selectedLocale)
								?.label
						}
					</Button>
				</DropdownMenuTrigger>
				{/* <DropdownMenuContent className={`${currentLocale === "fa" ? "r2l" : "l2r"} w-44`}> */}
				<DropdownMenuContent className="w-44">
					<DropdownMenuLabel className="text-center">
						{t("title")}
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuRadioGroup
						value={selectedLocale}
						onValueChange={handleLocaleChange}>
						{LANGUAGES.map((lang) => (
							<DropdownMenuRadioItem
								className="cursor-pointer"
								key={lang.code}
								value={lang.code}>
								<span
									className={`${
										lang.code === "fa"
											? "font-iran-yekan-x"
											: "font-sans"
									}`}>
									{lang.label}
								</span>
							</DropdownMenuRadioItem>
						))}
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		);

	return (
		<DropdownMenu dir={currentLocale === "fa" ? "rtl" : "ltr"}>
			<DropdownMenuTrigger asChild className={cn("", className)}>
				<SidebarMenuButton
					size={"default"}
					variant="default"
					className="cursor-pointer">
					<LanguagesIcon />
					{LANGUAGES.find((l) => l.code === selectedLocale)?.label}
				</SidebarMenuButton>
			</DropdownMenuTrigger>
			{/* <DropdownMenuContent className={`${currentLocale === "fa" ? "r2l" : "l2r"} w-44`}> */}
			<DropdownMenuContent className="w-44">
				<DropdownMenuLabel className="text-center">
					{t("title")}
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={selectedLocale}
					onValueChange={handleLocaleChange}>
					{LANGUAGES.map((lang) => (
						<DropdownMenuRadioItem
							className="cursor-pointer"
							key={lang.code}
							value={lang.code}>
							<span
								className={`${
									lang.code === "fa"
										? "font-iran-yekan-x"
										: "font-sans"
								}`}>
								{lang.label}
							</span>
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LanguageSwitcher;
