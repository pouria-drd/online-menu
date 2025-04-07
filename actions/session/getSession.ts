"use server";

import setSession from "./setSession";
import { AuthService } from "@/services";
import getTokenFromCookie from "./getTokenFromCookie";

interface SessionProps extends BaseApiOptions {}

/**
 * Retrieves a valid access token, either from cookies or by refreshing it using the refresh token.
 *
 * @returns A valid access token as a string, or null if no token is available or refresh fails.
 */
async function getSession(props?: SessionProps): Promise<string | null> {
    // Attempt to retrieve access and refresh tokens from cookies.
    const refreshToken = await getTokenFromCookie("refreshToken");
    if (!refreshToken) {
        return null;
    }

    const accessToken = await getTokenFromCookie("accessToken");
    if (accessToken) {
        return accessToken;
    }

    // Get delayMs from props
    const delayMs = props?.delayMs;
    // Get timeout from props
    const timeoutMs = props?.timeoutMs;

    // Instantiate AuthService
    const authService = new AuthService({ delayMs, timeoutMs });

    // Call the login method from AuthService
    const response = await authService.refreshSession(refreshToken);

    if (response.success && response.data) {
        await setSession("accessToken", response.data.cct);
        await setSession("refreshToken", response.data.rft);

        return response.data.cct;
    }

    return null;
}

export default getSession;
