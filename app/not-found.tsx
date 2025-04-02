import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
    return (
        <div className="font-mono flex flex-col items-center justify-center h-[75dvh]">
            <h1 className="text-xl sm:text-2xl text-drd-neutral-700 font-black mt-4">
                404 | Page Not Found
            </h1>
            <p className="text-base sm:text-lg mt-2 text-drd-neutral max-w-lg text-center">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
            </p>
            <div className="mt-6">
                <Button btnType="primary" outlined>
                    <Link href="/">Back to Home</Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
