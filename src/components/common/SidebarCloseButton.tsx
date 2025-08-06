"use client";

import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { SidebarTrigger } from "@/components/ui";

interface SidebarCloseButtonProps {
	className?: string;
}

const SidebarCloseButton = ({ className }: SidebarCloseButtonProps) => {
	const locale = useLocale();

	return (
		<div className={cn(`block md:hidden relative p-4`, className)}>
			<SidebarTrigger
				className={`absolute top-4 z-[9999]
                ${locale === "fa" ? "left-2" : "right-2"}
                `}>
				<XIcon className="size-6" />
			</SidebarTrigger>
		</div>
	);
};

export default SidebarCloseButton;
