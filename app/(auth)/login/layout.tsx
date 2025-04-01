import type { Metadata } from "next";

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Login",
    description: "Login here to access your account",
};

function LoginLayout(props: RootLayoutProps) {
    return <div>{props.children}</div>;
}

export default LoginLayout;
