"use server";

import { getBaseApiUrl, withTimeout } from "@/utils";

class BaseApiService {
    protected timeoutMs: number;
    protected delayMs: number | undefined;

    constructor(props: BaseApiOptions) {
        this.delayMs = props.delayMs;
        this.timeoutMs = props.timeoutMs ?? 10000;
    }

    /**
     * Simulate delay for testing purposes
     */
    private async simulateDelay() {
        if (this.delayMs && process.env.NODE_ENV === "development") {
            await new Promise((resolve) => setTimeout(resolve, this.delayMs));
        }
    }

    /**
     * Perform the fetch operation with a timeout.
     * @param url The URL to fetch
     * @param options The fetch options
     * @returns The fetch response or an api error
     */
    async fetchWithTimeout(
        url: string,
        options: RequestInit
    ): Promise<BaseServiceResponse> {
        try {
            // Simulate delay if needed
            await this.simulateDelay();
            // Get the API base URL
            const baseApiUrl = await getBaseApiUrl();

            if (!baseApiUrl) {
                throw new Error("Base API URL is not set.");
            }
            // Construct the full URL
            const apiUrl = baseApiUrl + (url.startsWith("/") ? url : `/${url}`);

            const response = await withTimeout(
                fetch(apiUrl, options),
                this.timeoutMs
            );

            return { response };
        } catch (error: any) {
            // Log error for debugging in development
            if (process.env.NODE_ENV === "development") {
                console.error("\nError fetching data :>>", error);
            }

            if (error instanceof DOMException && error.name === "AbortError") {
                return {
                    apiError: "مدت زمان درخواست طولانی شد، دوباره تلاش کنید.",
                };
            }

            return {
                apiError: "خطای ناخواسته ای رخ داده است!",
            };
        }
    }

    /**
     * Perform the fetch operation.
     * @param url The URL to fetch
     * @param options The fetch options
     * @returns The fetch response or an api error
     */
    async fetchApi(
        url: string,
        options: RequestInit
    ): Promise<BaseServiceResponse> {
        try {
            // Simulate delay if needed
            await this.simulateDelay();
            // Get the API base URL
            const baseApiUrl = await getBaseApiUrl();

            if (!baseApiUrl) {
                throw new Error("Base API URL is not set.");
            }
            // Construct the full URL
            const apiUrl = baseApiUrl + (url.startsWith("/") ? url : `/${url}`);

            const response = await fetch(apiUrl, options);

            return { response };
        } catch (error: any) {
            // Log error for debugging in development
            if (process.env.NODE_ENV === "development") {
                console.error("\nError fetching data :>>", error);
            }

            if (error instanceof DOMException && error.name === "AbortError") {
                return {
                    apiError: "مدت زمان درخواست طولانی شد، دوباره تلاش کنید.",
                };
            }

            return {
                apiError: "خطای ناخواسته ای رخ داده است!",
            };
        }
    }
}

export default BaseApiService;
