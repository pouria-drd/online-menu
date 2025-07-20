import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Pages.RegisterPage.layout");

    return {
        title: t("title"),
        description: t("description"),
    };
}

interface RegisterLayoutProps {
    children: React.ReactNode;
}

function RegisterLayout({ children }: Readonly<RegisterLayoutProps>) {
    return <>{children}</>;
}

export default RegisterLayout;
