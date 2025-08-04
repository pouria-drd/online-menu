import { cookies } from "next/headers";
import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui";
import { getTranslations } from "next-intl/server";
import { PanelHeader, PanelSidebar } from "@/components/layout/navigation";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Pages.Panel.layout");

	return {
		title: {
			default: t("title"),
			template: `${t("title")} | %s`,
		},
	};
}

interface PanelLayoutProps {
	children: React.ReactNode;
}

async function PanelLayout({ children }: Readonly<PanelLayoutProps>) {
	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
	return (
		<SidebarProvider defaultOpen={defaultOpen}>
			<PanelSidebar />

			<main className="w-full">
				<PanelHeader />

				<div className="p-4">{children}</div>
			</main>
		</SidebarProvider>
	);
}

export default PanelLayout;
