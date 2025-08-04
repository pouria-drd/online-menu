import { OMPLogo } from "@/components/icons";
import { SidebarTrigger } from "@/components/ui";
import { LanguageSwitcher, ThemeToggle } from "@/components/common";

const PanelHeader = () => {
	return (
		<header
			className="sticky top-0 flex items-center justify-between w-full
			bg-sidebar px-4 py-6 border-b-[1px] border-sidebar-border">
			<SidebarTrigger />
			<OMPLogo />
			<div className="hidden md:flex items-center justify-center gap-4">
				<LanguageSwitcher />
				<ThemeToggle />
			</div>
		</header>
	);
};

export default PanelHeader;
