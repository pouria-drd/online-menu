"use server";

import { withTimeout } from "@/utils";

class BaseApiService {
    protected timeout: number;
    protected delay: number;

    constructor(props: BaseApiOptions) {
        this.timeout = props.timeout ?? 10000;
        this.delay = props.delayMs ?? 0;
    }

    /**
     * Simulate delay for testing purposes
     */
    private async simulateDelay() {
        if (this.delay && process.env.NODE_ENV === "development") {
            await new Promise((resolve) => setTimeout(resolve, this.delay));
        }
    }

    /**
     * Perform the fetch operation with a timeout
     * @param url The URL to fetch
     * @param options The fetch options
     * @returns The fetch response
     */
    async fetchWithTimeout(url: string, options: RequestInit) {
        await this.simulateDelay();
        const response = await withTimeout(fetch(url, options), this.timeout);
        return response;
    }

    /**
     * Perform the fetch operation without timeout
     * @param url The URL to fetch
     * @param options The fetch options
     * @returns The fetch response
     */
    async fetchApi(url: string, options: RequestInit) {
        await this.simulateDelay();
        const response = await fetch(url, options);
        return response;
    }
}

export default BaseApiService;
