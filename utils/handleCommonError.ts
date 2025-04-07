"use server";

/**
 * Handles errors by logging and returning proper error messages
 * @param error The error object
 * @returns An object with a server error message
 */
function handleCommonError(error: any): {
    success: boolean;
    serverError: string;
} {
    // Log error for debugging in development
    if (process.env.NODE_ENV === "development") {
        console.error("\nError fetching data :>>", error);
    }

    if (error instanceof DOMException && error.name === "AbortError") {
        return {
            success: false,
            serverError: "مدت زمان درخواست طولانی شد. لطفاً دوباره تلاش کنید.",
        };
    }

    return { success: false, serverError: "خطای ناشناخته‌ای رخ داد." };
}

export default handleCommonError;
