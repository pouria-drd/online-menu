import "../assets/styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui";
import { NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers";
import { getLocale, getTranslations } from "next-intl/server";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const peyda = localFont({
    src: [
        {
            weight: "100",
            style: "normal",
            path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Thin.woff2",
        },
        {
            weight: "200",
            style: "normal",
            path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-ExtraLight.woff2",
        },
        {
            weight: "300",
            style: "normal",
            path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Light.woff2",
        },
        {
            weight: "400",
            style: "normal",
            path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Regular.woff2",
        },
        {
            weight: "500",
            style: "normal",
            path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Medium.woff2",
        },
        {
            weight: "600",
            style: "normal",
            path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-SemiBold.woff2",
        },
        {
            weight: "700",
            style: "normal",
            path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Bold.woff2",
        },
        {
            weight: "800",
            style: "normal",
            path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-ExtraBold.woff2",
        },
        {
            weight: "900",
            style: "normal",
            path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Black.woff2",
        },
    ],
    variable: "--font-peyda",
});

const iranYekanX = localFont({
    src: [
        {
            weight: "normal",
            style: "normal",
            path: "../assets/fonts/IRANYekanX/IRANYekanX-Regular.woff",
        },
        {
            weight: "bold",
            style: "normal",
            path: "../assets/fonts/IRANYekanX/IRANYekanX-Bold.woff",
        },
    ],
    variable: "--font-iran-yekan-x",
});

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Pages.RootPage.layout");

    return {
        applicationName: "OMP",
        // metadataBase: new URL("https://pouria-drd.ir"),
        title: {
            default: t("title"),
            template: `%s | ${t("titleTemplate")}`,
        },
    };
}

interface RootLayoutProps {
    children: React.ReactNode;
}

async function RootLayout({ children }: Readonly<RootLayoutProps>) {
    const locale = await getLocale();
    const dir = locale === "fa" ? "rtl" : "ltr";

    return (
        <html lang={locale} suppressHydrationWarning dir={dir}>
            <body
                className={`${peyda.variable} ${iranYekanX.variable}
                    ${geistSans.variable} ${geistMono.variable} antialiased
                    flex flex-col min-h-dvh
                    ${
                        locale === "fa"
                            ? "!font-iran-yekan-x ss02"
                            : "!font-sans"
                    } `}>
                <NextIntlClientProvider locale={locale}>
                    <ThemeProvider attribute="class" defaultTheme="system">
                        {children}
                        <Toaster position="top-center" />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default RootLayout;
