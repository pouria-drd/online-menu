import { Fragment } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Pages.Panel.DashboardPage.layout");

	return {
		title: t("title"),
		description: t("description"),
	};
}

interface DashboardLayoutProps {
	children: React.ReactNode;
}

function DashboardLayout({ children }: Readonly<DashboardLayoutProps>) {
	return <Fragment>{children}</Fragment>;
}

export default DashboardLayout;
