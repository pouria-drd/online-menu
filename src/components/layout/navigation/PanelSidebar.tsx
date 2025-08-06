"use client";

import Slink from "./Slink";
import { useLocale } from "next-intl";
import { isLinkActive } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
	LanguageSwitcher,
	SidebarCloseButton,
	ThemeToggle,
} from "@/components/common";
import {
	Calendar,
	ChevronDown,
	Home,
	Inbox,
	Search,
	Settings,
} from "lucide-react";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
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

				<Collapsible defaultOpen className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel>Settings</SidebarGroupLabel>
						<SidebarGroupLabel
							asChild
							className="cursor-pointer hover:text-sidebar-accent-foreground">
							<CollapsibleTrigger>
								Display
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<ThemeToggle size="sm" sidebar />
									</SidebarMenuItem>
									<SidebarMenuItem>
										<LanguageSwitcher sidebar />
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
			</SidebarContent>
		</Sidebar>
	);
}

export default PanelSidebar;
