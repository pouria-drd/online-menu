"use client";

import { Button } from "../ui";
import { redirect } from "next/navigation";
import logoutAction from "@/features/auth/actions/logout";

const LogoutButton = () => {
    const handleLogout = async () => {
        await logoutAction();
        // Redirect to the login page after logging out.
        redirect("/");
    };

    return (
        <div>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default LogoutButton;
