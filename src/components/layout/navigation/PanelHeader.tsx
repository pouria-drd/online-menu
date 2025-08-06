import { MenuIcon } from "lucide-react";
import { OMPLogo } from "@/components/icons";
import { SidebarTrigger } from "@/components/ui";

const PanelHeader = () => {
	return (
		<header
			className="sticky top-0 flex items-center justify-between w-full
			bg-sidebar p-4 border-b-[1px] border-border">
			<SidebarTrigger>
				<MenuIcon className="size-6" />
			</SidebarTrigger>
			<OMPLogo />

			<div className="p-4 bg-accent rounded-full"></div>
		</header>
	);
};

export default PanelHeader;
