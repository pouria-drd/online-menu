import { getTranslations } from "next-intl/server";
import { LoginForm } from "@/features/auth/components";

async function RootPage() {
    const t = await getTranslations("Pages.RootPage.layout");

    return (
        <div className="min-h-dvh flex items-center justify-center p-4">
            <LoginForm />
        </div>
    );
}

export default RootPage;
