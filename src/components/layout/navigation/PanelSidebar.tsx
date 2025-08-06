"use client";

import Slink from "./Slink";
import { useLocale } from "next-intl";
import { isLinkActive } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SidebarCloseButton } from "@/components/common";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
} from "@/components/ui";

// Menu items.
const items = [
	{
		title: "Dashboard",
		url: "/panel/dashboard",
		icon: Home,
	},
	{
		title: "Inbox",
		url: "/panel/inbox",
		icon: Inbox,
	},
	{
		title: "Calendar",
		url: "/panel/calendar",
		icon: Calendar,
	},
	{
		title: "Search",
		url: "/panel/search",
		icon: Search,
	},
	{
		title: "Settings",
		url: "/panel/settings",
		icon: Settings,
	},
];

function PanelSidebar() {
	const locale = useLocale();
	const pathName = usePathname();

	return (
		<Sidebar collapsible="icon" side={locale === "fa" ? "right" : "left"}>
			<SidebarCloseButton />
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<Slink
									key={item.title}
									title={item.title}
									url={item.url}
									isActive={isLinkActive(pathName, item.url)}>
									<item.icon />
								</Slink>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}

export default PanelSidebar;
