import { Fragment } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Pages.Panel.SettingsPage.layout");

	return {
		title: t("title"),
		description: t("description"),
	};
}

interface SettingsLayoutProps {
	children: React.ReactNode;
}

function SettingsLayout({ children }: Readonly<SettingsLayoutProps>) {
	return <Fragment>{children}</Fragment>;
}

export default SettingsLayout;
