"use server";

// Retrieve the base API URL from environment variables, defaulting to null if not provided.
const BASE_API_URL: string | null = process.env.BASE_API_URL ?? null;

/**
 * Constructs and returns the base API URL with the specified version.
 *
 * @returns The full base URL as a string if BASE_API_URL is set, otherwise null.
 * @example "https://api.example.com/v1" or "https://api.example.com"
 */
async function getBaseApiURL(): Promise<string | null> {
    // Log a warning and return null if BASE_API is not configured in environment variables.
    if (!BASE_API_URL) {
        console.warn("BASE_API is not set in the environment variables.");
        return null;
    }

    // Construct and return the full API URL.
    return BASE_API_URL.endsWith("/")
        ? BASE_API_URL.slice(0, -1)
        : BASE_API_URL;
}

export default getBaseApiURL;
