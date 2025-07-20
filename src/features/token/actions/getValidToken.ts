"use server";

import setTokenToCookie from "./setTokenToCookie";
import getTokenFromCookie from "./getTokenFromCookie";

const envTimeout = Number(process.env.timeout) || 10000;

/**
 * XML Documentation:
 * <function>
 *   <name>getValidToken</name>
 *   <description>Retrieves a valid access token from cookies or refreshes it using the refresh token if expired.</description>
 *   <param name="timeout" type="number" optional="true">Optional timeout in milliseconds for the refresh request, defaulting to 10,000 ms.</param>
 *   <returns>Returns a valid access token as a string if successful, or null if the token is not available or refresh fails.</returns>
 * </function>
 */

/**
 * Retrieves a valid access token, either from cookies or by refreshing it using the refresh token.
 *
 * @param timeout - Optional timeout in milliseconds for the refresh request (default is 10,000 ms).
 * @returns A valid access token as a string, or null if no token is available or refresh fails.
 */
async function getValidToken(
    timeout: number = envTimeout
): Promise<string | null> {
    // Attempt to retrieve access and refresh tokens from cookies.
    const refreshToken = await getTokenFromCookie("refresh");
    if (!refreshToken) {
        return null;
    }

    const accessToken = await getTokenFromCookie("access");
    if (accessToken) {
        return accessToken;
    }

    // Set up a controller to handle request timeout.
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const apiUrl = process.env.BASE_API_URL + "authentication/refresh/";

        // Make a POST request to refresh the access token using the refresh token.
        const response = await fetch(apiUrl, {
            cache: "no-cache",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh: refreshToken }),
            signal: controller.signal,
        });

        // Clear the timeout after receiving the response.
        clearTimeout(timeoutId);

        // If the response is not OK, return null (refresh failed).
        if (!response.ok) {
            return null;
        }

        // Parse the response as JSON.
        const jsonResponse = await response.json();

        // If access token is in the response, set it in cookies and return it.
        if (jsonResponse.access) {
            const access = jsonResponse.access;
            await setTokenToCookie("access", access);
            return access;
        }

        // Return null if no access token was found in the response.
        return null;
    } catch (error) {
        // Clear the timeout and return null in case of error (network or timeout).
        clearTimeout(timeoutId);
        return null;
    }
}

export default getValidToken;
