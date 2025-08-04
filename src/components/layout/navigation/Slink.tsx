import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui";
import Link from "next/link";

interface SlinkProps {
	title: string;
	url: string;
	isActive: boolean;
	children?: React.ReactNode;
}

const Slink = (props: SlinkProps) => {
	const { title, children, url, isActive } = props;
	return (
		<SidebarMenuItem>
			<SidebarMenuButton
				asChild
				className={isActive ? "bg-sidebar-accent" : ""}>
				<Link href={url}>
					{children}
					<span>{title}</span>
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
};

export default Slink;
