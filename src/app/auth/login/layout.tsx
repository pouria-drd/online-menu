import { Fragment } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Pages.LoginPage.layout");

	return {
		title: t("title"),
		description: t("description"),
	};
}

interface LoginLayoutProps {
	children: React.ReactNode;
}

function LoginLayout({ children }: Readonly<LoginLayoutProps>) {
	return <Fragment>{children}</Fragment>;
}

export default LoginLayout;
